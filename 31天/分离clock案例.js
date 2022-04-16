const fs = require('fs');

const path = require('path');

const cp = require('child_process');


const regstyle = /<style>[\s\S]*<\/style>/;

const regjs = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname,'/index.html'),'utf-8',function (err,data) {
    if (err) {
        return console.log('获取文件失败' + err.message)
    }

    getstyle(data);
    getjs(data);
    gethtml(data);
})


function getstyle(datacss) {
    const str = regstyle.exec(datacss);
    const newstr = str[0].replace('<style>','').replace('</style>','');
    fs.writeFile(path.join(__dirname + '/clock/index.css'),newstr,function (err) {
        if (err) {
            return console.log('写入css失败' + datacss.message);
        }
        console.log('CSS OK');
    })
    
};

function getjs(datajs) {
    const str = regjs.exec(datajs);
    const newstr = str[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'/clock/index.js'),newstr,function (err) {
        if (err) {
            return console.log('写入js失败' + datajs.message);
        }
        console.log('JS OK');
    })
};

function gethtml(datahtml) {
    const str = datahtml.replace(regstyle,"<link rel='stylesheet' href='./index.css'/>").replace
    (regjs,"<script src='./index.js'></script>");
    fs.writeFile(path.join(__dirname + '/clock/index.html'),str,function (err) {
        if (err) {
            return console.log('html失败' + datahtml.message);
        }
        console.log('HTMl OK');
        cp.exec(path.join('start ' + __dirname + '/clock/index.html'));
    })
}