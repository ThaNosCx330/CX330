//导入验证模块
const joi = require('joi');
const schema = {};

const password = joi.string().pattern(/^[\S]{6,12}$/).required();
// 登录验证
schema.getlogin = joi.object({

    username:joi.string().alphanum().min(4).max(8).required().error(new Error('用户名不可用')),

    password:password.error(new Error('密码输入不合格'))
});

// 更新用户信息验证规则
schema.updateuserinfo = joi.object({

    // 定义 id, nickname, emial 的验证规则
    //id为前端自动填写，不是客户填写的id原则保持不变
    id : joi.number().integer().min(1).required().error(new Error('id不合格')),

    nickname : joi.string().required().error(new Error('昵称不合格')),

    emial : joi.string().email().required().error(new Error('邮箱不合格'))

});

//重置密码验证规则

schema.updatepwd = joi.object({

    oldpwd:password.error(new Error('旧密码输入不合格')),

    newpwd:joi.not(joi.ref('oldpwd')).concat(password).error(new Error('新密码输入不合格'))
});

//头像验证
schema.updateimg = joi.object({
    avatar : joi.string().dataUri().required().error(new Error('头像不合格'))
})

module.exports = schema;