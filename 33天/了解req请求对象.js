const http = require('http');

const fs = require('fs');

const path = require('path');

const server = http.createServer();

server.on('request',(req,res) => {
    let url = req.url;
    let str = '<h1>404</h1>'
    res.setHeader('Content-Type','text/html;charset=utf-8')
    if (url == '/index.html' || url == '/') {
        fs.readFile(path.join(__dirname,'/index.html'),'utf-8',function (err,data) {
            //console.log(data);
            res.end(data)
        })
    }else{
        res.end(str);
    }

    
});

server.listen('8080',(req) =>{
    console.log(req);
})