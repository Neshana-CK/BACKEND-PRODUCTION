// src/app.js
const express = require("express");
const morgan = require("morgan");
const logger = require("../utils/logger"); // Winston logger
const app = express();

app.use(express.json());

// Morgan logs requests using Winston
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

// GET /api/hello
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

// POST /api/users
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  // For demo: just return the user data
  res.status(201).json({
    message: "User created successfully",
    user: { name, email },
  });
});

// GET /api/error to trigger error logs
app.get("/api/error", (req, res, next) => {
  const err = new Error("Test error triggered");
  err.status = 500;
  next(err);
});

// Error middleware
app.use((err, req, res, next) => {
  logger.error(`${err.message} - ${req.method} ${req.originalUrl}`);
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
