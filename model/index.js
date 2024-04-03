const mongoose = require("mongoose");
const {dbURL} = require("../config/config.default");

// 连接 MongoDB 数据库
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// 连接失败
db.on("error", (err) => {
    console.log("MongoDB 数据库 连接失败");
});

// 连接成功
db.on("open", () => {
    console.log("MongoDB 数据库 连接成功");
});

module.exports = {
    User: mongoose.model('User', require('./user')),
    Task: mongoose.model("Task", require("./task")),
}