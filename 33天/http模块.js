const http = require('http');

const server = http.createServer();


server.on('request',(req,res) => {
    console.log('request事件');
});

server.listen('5667',function () {
    console.log('listen事件');
    
})