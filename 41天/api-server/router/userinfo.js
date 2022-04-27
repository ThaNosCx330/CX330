const express = require('express');

//引入或群用户数据的userinfo文件
const router_fn = require('../router_fn/userinfo')

const router = express.Router();

//获取用户数据
router.get('/userinfo',router_fn.getuserinfo);

//更新用户数据
router.post('/updateuserinfo',router_fn.updateuserinfo)

module.exports = router;