const fs = require('fs');

const path = require('path');

const http = require('http');

const server = http.createServer();

server.on('request',(req,res) => {
    let path1 = '';
    if (req.url == '/') {
        path1 = path.join(__dirname,'/clock/index.html');
        console.log(path1);
    } else {
        path1 = path.join(__dirname,'/clock',req.url)
        console.log(path1);
    }
    
    
    
    fs.readFile(path1,'utf-8',function (err,data) {
        console.log(err);
        if (err) return res.end('<h1>404</h1>');
        res.end(data);
    })
});

server.listen('8080',(res) => {
    console.log('ok');
})