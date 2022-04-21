//导入模块
const express = require('express');

const app = express();

const qs = require('querystringify');

app.use((req,res,next) => {
    //这是一个中间件

   //定义空字符串，接收数据
   let str = '';

   //监听req的data事件
   req.on('data',(datastr) => {
        str += datastr;
   });


   //接收完毕，自动触发end事件
   req.on('end',() => {
        const body = qs.parse(str);
        req.body = body;
        next();
   })
   
});

//post请求

app.post('/user',(req,res) => {
    console.log(req.body);
    res.send(req.body)
})

//启动服务器
app.listen(8080,() => {
    console.log('启动');
})