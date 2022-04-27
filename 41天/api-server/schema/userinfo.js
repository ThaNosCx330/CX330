//导入验证模块
const joi = require('joi');

const schema = joi.object({
    // 定义 id, nickname, emial 的验证规则
    id : joi.number().integer().min(1).required().error(new Error('id不合格')),
    nickname : joi.string().required().error(new Error('昵称不合格')),
    emial : joi.string().email().required().error(new Error('邮箱不合格'))

});



module.exports = schema;