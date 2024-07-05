const express = require("express");
const router = express.Router();
const { getTasks, postTask, getTask, putTask, deleteTask } = require("../controllers/taskController.js");
const { verifyAccessToken } = require("../middleware/index.js");

// Routes beginning with /api/tasks
router.get("/tasks", verifyAccessToken, getTasks);
router.post("/add", verifyAccessToken, postTask);
router.get("/:taskId", verifyAccessToken, getTask);
router.put("/:taskId", verifyAccessToken, putTask);
router.delete("/:taskId", verifyAccessToken, deleteTask);

module.exports = router;
