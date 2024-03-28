// Authentication 用户登录
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
      res.send("post /users");
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
