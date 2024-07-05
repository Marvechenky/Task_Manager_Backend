const express = require("express");
const router = express.Router();
const { getTasks, postTask, getTask, putTask, deleteTask } = require("../controllers/taskController.js");
const { verifyAccessToken } = require("../middleware");

// Routes beginning with /api/tasks
router.get("/", verifyAccessToken, getTasks);
router.post("/addTask", verifyAccessToken, postTask);
router.get("/:taskId", verifyAccessToken, getTask);
router.put("/:taskId", verifyAccessToken, putTask);
router.delete("/:taskId", verifyAccessToken, deleteTask);

module.exports = router;
