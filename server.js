const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");
const connectDB = require("./config/db");

// Connect to Database
connectDB();

const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
