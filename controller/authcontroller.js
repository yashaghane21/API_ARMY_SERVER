const user = require("../models/user");
const { registrationTemplate } = require("../utils/emailTemplates");
const sendmail = require("../utils/mail");
const { securityAlertTemplate } = require("./../utils/emailTemplates");

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newUser = new user({ email, password });
    await newUser.save();

   
    const subject = "Welcome to API Army";
    const html = registrationTemplate(email); 
    sendmail(email, subject, html);

    res.status(201).json({ message: "User registered successfully",status:200,success:true,user:newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};



const login = async (req, res) => {
    const { email, password } = req.body;
    const ipAddress = req.ip;
  
    try {
      const foundUser = await user.findOne({ email });
  
      if (!foundUser) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      if (foundUser.isLocked && foundUser.lockUntil > Date.now()) {
        return res.status(403).json({ error: "Account locked. Try again later." });
      }
  
      if (password !== foundUser.password) {
        foundUser.failedAttempts += 1;
  
        if (foundUser.failedAttempts >= 5) {
          foundUser.isLocked = true;
          foundUser.lockUntil = Date.now() + 15 * 60 * 1000;
  
          const subject = "Security Alert - Failed Login Attempts";
          const html = securityAlertTemplate(email, ipAddress, new Date().toISOString());
          sendmail(process.env.ADMINMAIL, subject, html);
        }
  
        await foundUser.save();
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      foundUser.failedAttempts = 0;
      foundUser.isLocked = false;
      foundUser.lockUntil = null;
      await foundUser.save();
  
      res.json({ message: "Login successful",status:200,success:true,user:foundUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  };


module.exports = { register, login };