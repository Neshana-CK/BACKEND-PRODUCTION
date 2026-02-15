const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
  getTasks,
  createTask,
} = require("../controllers/task.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management APIs
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks (Protected)
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of tasks per page
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Filter by status
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by title or description
 *     responses:
 *       200:
 *         description: Tasks fetched successfully
 *       401:
 *         description: Unauthorized (No or Invalid Token)
 */
router.get("/tasks", authMiddleware, getTasks);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create new task (Protected)
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Complete backend project
 *               description:
 *                 type: string
 *                 example: Finish Day 7 Swagger implementation
 *               status:
 *                 type: string
 *                 example: pending
 *     responses:
 *       201:
 *         description: Task created successfully
 *       401:
 *         description: Unauthorized
 */
router.post("/tasks", authMiddleware, createTask);

module.exports = router;
