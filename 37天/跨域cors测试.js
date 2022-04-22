const express = require('express');
const parser = require('body-parser');
const app = express();

//引入cors模块
const cors = require('cors');

//配置中间件cors，
//一定要在所有的路由之前导入中间件
app.use(cors());
app.use(parser.urlencoded( { extended : false } ))
const router = require('./router')

app.use('/api',router);

app.listen(80,(req,res) => {
    console.log('80开启成功');
})