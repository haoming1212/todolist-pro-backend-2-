const exporess = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");
const errorHandler = require("./middleware/error-handler");
require("./model");

// 初始化
const app = exporess();

// 中间件
app.use(cors());
app.use(exporess.json());
app.use(exporess.urlencoded());
app.use(morgan("dev"));
app.use(errorHandler());
app.use("/api", router);

// 端口
const PORT = process.env.PORT || 3001;

// 端口监听
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})