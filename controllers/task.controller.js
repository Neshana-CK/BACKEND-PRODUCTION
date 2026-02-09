const Task = require("../models/task.model");

exports.getTasks = async (req, res) => {
    const { page = 1, limit = 10, status, search } = req.query;

    const query = { user: req.user.userId };

    if (status) query.status = status;

    if (search) {
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } }
        ];
    }

    const skip = (page - 1) * limit;

    const [tasks, total] = await Promise.all([
        Task.find(query)
            .skip(skip)
            .limit(Number(limit))
            .sort({ createdAt: -1 }),
        Task.countDocuments(query)
    ]);

    res.status(200).json({
        status: "success",
        results: tasks.length,
        total,
        page: Number(page),
        totalPages: Math.ceil(total / limit),
        data: tasks
    });
};

// ✅ ADD THIS
exports.createTask = async (req, res) => {
    const { title, description, status } = req.body;

    const task = await Task.create({
        title,
        description,
        status,
        user: req.user.userId
    });

    res.status(201).json({
        status: "success",
        data: task
    });
};
