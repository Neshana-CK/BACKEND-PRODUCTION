const logger = require("../utils/logger");

const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";

    // Log the error
    logger.error(`${status.toUpperCase()}: ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    res.status(statusCode).json({
        status,
        message: err.message || "Internal Server Error",
    });
};

module.exports = errorMiddleware;
