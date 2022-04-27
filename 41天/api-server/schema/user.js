//导入验证模块
const joi = require('joi');

const schema = joi.object({
    username:joi.string().alphanum().min(4).max(8).required().error(new Error('用户名不可用')),
    password:joi.string().pattern(/^[\S]{6,12}$/).required().error(new Error('密码不合格'))
});



module.exports = schema;