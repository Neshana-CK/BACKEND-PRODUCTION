// server.js
const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");
const connectDB = require("./config/db");

// Check required environment variables
const { MONGO_URL, JWT_SECRET, PORT, NODE_ENV } = process.env;

if (!MONGO_URL) {
  console.error("❌ MONGO_URL is not defined. Set it in your environment variables.");
  process.exit(1);
}

if (!JWT_SECRET) {
  console.error("❌ JWT_SECRET is not defined. Set it in your environment variables.");
  process.exit(1);
}

// Connect to Database
connectDB().catch((err) => {
  console.error("❌ Failed to connect to MongoDB:", err.message);
  process.exit(1);
});

// Start Server
const port = PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running in ${NODE_ENV || "development"} mode on port ${port}`);
});
