const AppError = require("../utils/appError");

exports.registerValidation = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return next(new AppError("All fields are required", 400));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return next(new AppError("Invalid email format", 400));
    }

    if (password.length < 6) {
        return next(new AppError("Password must be at least 6 characters", 400));
    }

    next();
};

exports.loginValidation = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError("Email and password are required", 400));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return next(new AppError("Invalid email format", 400));
    }

    next();
};