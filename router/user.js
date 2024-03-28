const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");

// Authentication 用户登录
router.post("/login", userController.login);

// Registration 用户注册
router.post("/register", userController.register);

// Get Current User 获取当前登录用户
router.get("/current", userController.getCurrentUser);

// Update User 更新用户
router.put("/update", userController.updateUser);

module.exports = router;