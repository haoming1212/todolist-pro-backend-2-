const { Task } = require("../model");

exports.getTaskById = async (req, res, next) => {
    try {
        // 处理请求
        let task = await Task.findById(req.body.id);
        //   console.log(task);
        res.send({
            status: 0,
            msg: "success",
            data: task,
        });
    } catch (err) {
        next(err);
    }
};

exports.getTaskByList = async (req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    try {
        // 处理请求
        let taskList = await Task.find().then((res) => {
            return res;
        });
        res.send({
            status: 0,
            msg: "success",
            data: taskList,
        });
    } catch (err) {
        next(err);
    }
};

exports.updateTask = async (req, response, next) => {
    console.log(req.body.completed);
    try {
        // 处理请求
        let result = await Task.updateOne(
            { _id: req.body._id },
            { $set: { "name": req.body.name, "completed":  req.body.completed, "image": req.body.image} },
        )
            .then((result) => {return result})
            .catch((err) => {
                response.send({
                    status: 1,
                    msg: "error",
                    data: err,
                });
            });

            response.send({
            status: 0,
            msg: "success",
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

exports.addTask = async (req, res, next) => {
    try {
        // 处理请求
        let task = new Task(req.body);
        // 保存数据库
        await task.save();
        // 转化为json
        task = task.toJSON();
        // 响应
        res.send({
            status: 0,
            msg: "success",
            data: task._id,
        });
    } catch (err) {
        next(err);
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
        // 处理请求
        console.log(req.body.id);

        let result = await Task.deleteOne({ _id: req.body.id });
        res.send({
            status: 0,
            msg: "success",
            data: result,
        });
    } catch (err) {
        next(err);
    }
};
