require("express-async-errors");

const express = require("express");
const AppError = require("../utils/appError");
const errorMiddleware = require("../middleware/error.middleware");

const app = express();

// Body parser
app.use(express.json());

// Routes
app.use("/api/auth", require("../routes/auth.routes"));
app.use("/api", require("../routes/task"));

// Catch all invalid routes
app.use((req, res, next) => {
    next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

// Global error handler (MUST be last)
app.use(errorMiddleware);

module.exports = app;
