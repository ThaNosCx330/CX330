const express = require('express');

const app = express();

//规定jsonp接口，有cors跨域模块必须写在cors模块之前
app.get('/api/jsonp',(req,res) => {

    //定义callback名字，参数只要JSON格式
    const fnName = req.query.callback

    //规定数据
    const data = {name : '张三', age : 20, sex : '女'}

    //定义字符串，数据转为JSON格式
    const scriptStr = `${fnName}(${JSON.stringify(data)})`

    //数据发送给客户端
    res.send(scriptStr)
})

app.listen(8080,(req,res) => {
    console.log('8080启动');
})