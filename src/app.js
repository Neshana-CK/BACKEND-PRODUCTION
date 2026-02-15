// src/app.js
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("../utils/logger");

const authRoutes = require("../routes/auth.routes");
const taskRoutes = require("../routes/task");

// ✅ Swagger
const { swaggerUi, specs } = require("../config/swagger");

const app = express();

// 🔐 Security Headers
app.use(helmet());

app.use(express.json());

// 📜 Morgan logs requests using Winston
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

// ---------------- ROUTES ----------------

// Test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

// ✅ Swagger Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// ✅ Mount auth routes
app.use("/api/auth", authRoutes);

// ✅ Mount task routes
app.use("/api", taskRoutes);

// ---------------- ERROR MIDDLEWARE ----------------

app.use((err, req, res, next) => {
  logger.error(`${err.message} - ${req.method} ${req.originalUrl}`);
  res.status(err.status || 500).json({
    success: false,
    error: err.message,
  });
});

module.exports = app;
