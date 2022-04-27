//引入express中间件
const express = require('express');

const app = express();

//导入跨域中间件cors
const cors = require('cors');

//全局配置跨域cors中间件
app.use(cors());

//解析application/x-www-form-unlencoded数据中间件
app.use(express.urlencoded( { extended : false } ) );

//在路由之前封装res.cc函数，不然访问不到
app.use((req,res,next) => {
    res.cc = (err,status = 1) => {
        res.send({
            status,
            message: err instanceof Error? err.message : err
        })
    };

    next();
})

//解密token
const secertKEY = 'jiangziyi';
//路由之前解析token的配置
var { expressjwt: expressJWT1 } = require("express-jwt");
app.use(expressJWT1({secret:secertKEY,algorithms:["HS256"]}).unless({path:[/^\/api\//]}));

//导入router文件
const router = require('./router/user')
app.use('/api',router)

//导入userinfo文件，获取用户信息
const userinfo = require('./router/userinfo')
app.use('/my',userinfo)

// 错误中间件
app.use(function (err, req, res, next) {

    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  
    // 未知错误...
    res.cc(err)
  })

//开启8089端口的服务器
app.listen(8089,() => {
    console.log("ok");
})