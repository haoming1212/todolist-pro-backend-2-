const express = require("express");
const router = express.Router();

// 用户路由相关
router.use("/user", require("./user"));
router.use("/task", require("./task"));

module.exports = router;