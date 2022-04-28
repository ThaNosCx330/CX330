const express = require('express');

const router = express.Router();

//引入或群用户数据的userinfo文件
const router_fn = require('../router_fn/userinfo')

//获取用户数据
router.get('/userinfo',router_fn.getuserinfo);

//更新用户数据
router.post('/updateuserinfo',router_fn.updateuserinfo);

//重置密码
router.post('/updatepwd',router_fn.updatepwd);

//更新用户头像
router.post('/updateimg',router_fn.updateAvatar);

module.exports = router;