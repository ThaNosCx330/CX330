const express = require('express');


const router = express.Router();



// formidable可以使用
//const formidable = require('formidable');

//const form = formidable();



router.get('/get',(req,res) => {
    const query = req.query;
    res.send({
        status: 0,
        message: 'GET请求成功',
        data: query
    })
});



router.post('/post',(req,res) => {
    res.send(req.body);
})
module.exports = router;