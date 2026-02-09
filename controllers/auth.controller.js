const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");

exports.register = async (req, res, next) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        return next(new AppError("User already exists", 400));
    }

    await User.create({ name, email, password });

    res.status(201).json({
        status: "success",
        message: "User registered successfully"
    });
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new AppError("Invalid email or password", 401));
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return next(new AppError("Invalid email or password", 401));
    }

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        status: "success",
        message: "Login successful",
        token
    });
};