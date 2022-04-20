//导入
const express = require('express');

//创建express服服务器

const app = express();

//响应数据

app.get('/user',(req,res) => {

    res.send({
        data:123,
    })
})

app.post('/user',(req,res) => {

    console.log(req);
    res.send('POST成功')
})


//启动服务器

app.listen(8080,function () {
    console.log('ok');
})