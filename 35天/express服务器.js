//导入
const express = require('express');

//创建express服服务器

const app = express();

//响应数据

app.get('/:id/:name',(req,res) => {
    console.log(req.query);
    res.send(req.params)
})

app.post('/user',(req,res) => {


    res.send('POST成功')
})

//启动服务器

app.listen(8080,function () {
    console.log('ok');
})