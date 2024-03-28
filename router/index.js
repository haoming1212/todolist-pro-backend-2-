const express = require("express");
const router = express.Router();

// 用户路由相关
router.use("/user", require("./user"));

module.exports = router;