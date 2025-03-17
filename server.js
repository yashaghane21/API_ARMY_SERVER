const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authroute");
const mongoose = require("mongoose");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: "*" // Update this for production
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Log MongoDB URL (for debugging)
console.log("MongoDB URL:", process.env.MONGOURL);

// Connect to MongoDB
mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Auth routes
app.use("/auth", authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app; // Export for Vercel