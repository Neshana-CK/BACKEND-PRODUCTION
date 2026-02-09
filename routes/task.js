const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
    getTasks,
    createTask
} = require("../controllers/task.controller");

const router = express.Router();

// GET /api/tasks
router.get("/tasks", authMiddleware, getTasks);

// POST /api/tasks
router.post("/tasks", authMiddleware, createTask);

module.exports = router;
