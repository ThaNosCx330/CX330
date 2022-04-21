const express = require('express');

const app = express();

const router = require('./router1')


app.use(router);

app.listen(80,() => {
    console.log('127.0.0.1');
})