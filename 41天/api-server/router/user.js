//导入expre中间件
const express = require('express');

const router = express.Router();

//导入路由的处理函数
const router_fn = require('../router_fn/user')

//注册
router.post('/reguser',router_fn.regUser);

// 登录
router.post('/login',router_fn.login);

module.exports = router;