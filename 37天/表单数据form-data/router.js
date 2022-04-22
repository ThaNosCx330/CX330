const express = require('express');
const formidable = require('formidable');
const form = formidable();
const router = express.Router();

router.post('/post',(req,res) => {
    form.parse(req, (err, fields, files) => {
        console.log(err,fields,files);
    })
    console.log('ok');
    res.send('ok')
});

module.exports = router;



