const express = require('express');

const router = express.Router();

router.get('/user',(req,res) => {
    res.send('get ok')
});

router.post('/user',(req,res) => {
    res.send('post ok')
});

module.exports = router;