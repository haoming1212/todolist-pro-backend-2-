const express = require("express");
const router = express.Router();
const TaskController = require("../controller/TaskController");

// 查询
router.post("/", TaskController.getTaskById);

// 列表查询
router.post("/list", TaskController.getTaskByList);

// 添加
router.post("/add", TaskController.addTask);

// 删除
router.post("/delete", TaskController.deleteTask);

// 更新
router.post("/update", TaskController.updateTask);

router.post("/random", TaskController.random);

module.exports = router;