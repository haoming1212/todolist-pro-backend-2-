// Authentication 用户登录

const { User } = require("../model");

/**
 * 用户登录
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.login = async (req, res, next) => {
    try {
      // 处理请求
      res.send("post /users/login");
    } catch (err) {
      next(err);
    }
};
  
/**
 * 用户注册
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
  exports.register = async (req, res, next) => {
    try {
      // 处理请求
      let user = new User(req.body.user);
      // 保存数据库
      await user.save();
      // 转化为json
      user = user.toJSON();
      // 删除密码
      delete user.password;
      // 响应
      res.status(201).json({user});
    } catch (err) {
      next(err);
    }
  };
  
/**
 * 获取当前用户
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
  exports.getCurrentUser = async (req, res, next) => {
    try {
      // 处理请求
      res.send("get /user");
    } catch (err) {
      next(err);
    }
  };
  
/**
 * 更新当前用户
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
  exports.updateUser = async (req, res, next) => {
    try {
      // 处理请求
      res.send("put /user");
    } catch (err) {
      next(err);
    }
  };
