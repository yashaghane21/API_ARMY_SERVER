const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  failedAttempts: { type: Number, default: 0 },
  isLocked: { type: Boolean, default: false },
  lockUntil: { type: Date },
});

module.exports = mongoose.model("APIARMYUSERS", userSchema);