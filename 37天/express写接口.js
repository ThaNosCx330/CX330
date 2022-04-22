const express = require('express');

const app = express();

const parser = require('body-parser');

const apirouter  = require('./router')

app.use(parser.urlencoded( { extended : false } ))

app.use('/api',apirouter)

app.listen(8080,(req,res) => {
    console.log('开启8080');
})