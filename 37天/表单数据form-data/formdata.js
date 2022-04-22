const express = require('express');

const app = express();
const router = require('../render')

app.use('/api',router);

app.listen(8080,(req,res) => {
    console.log('8080开启了');
})