const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authroute");
const { default: mongoose } = require("mongoose");
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: "*"
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(process.env.MONGOURL);

mongoose.connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connect");
    })
    .catch((err) => {
        console.log(err);
    });
    app.get('/', (req, res) => {
        res.send('Welcome to the API!');
      });
      
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});