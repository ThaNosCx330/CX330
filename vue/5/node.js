const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json())
//解析application/x-www-form-unlencoded数据中间件
app.use(express.urlencoded( { extended : false } ) );

app.get('/data',(req,res) => {
    console.log(req.body,req.query);
    res.send('ok')
})

app.post('/book',(req,res) => {
    console.log(req.body)

    res.send(req.body)
})

app.listen(8089,() => {
    console.log("8089OK");
})