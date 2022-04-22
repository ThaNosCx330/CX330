const express = require('express');
const multiparty = require('multiparty');
const form = new multiparty.Form();
const router = express.Router();

router.post('/post',(req,res) => {
    form.parse(req, (err, fields, files) => {
        console.log(err,fields,files);
    })
    console.log('ok');
    res.send('ok')
});

module.exports = router;