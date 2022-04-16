//导入自带的fs文件读取模块，readfile
const fs  = require('fs');

// 调用fs
fs.readFile('./files/1.text','utf-8',function (err,data) {

    //读取成功err就是null，data就是成功的值
    //读取失败err就是一个失败的对象，data就是undefind
    console.log(err);

    console.log(data);
})