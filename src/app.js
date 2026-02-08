require("express-async-errors");

const express = require("express");
const AppError = require("../utils/appError");
const errorMiddleware = require("../middleware/error.middleware");

const app = express();

app.use(express.json());

app.use("/api/auth", require("../routes/auth.routes"));

// catch all invalid routes
app.use((req, res, next) => {
    next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

// global error handler (MUST be last)
app.use(errorMiddleware);

module.exports = app;
