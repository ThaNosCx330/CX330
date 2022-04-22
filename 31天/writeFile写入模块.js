//导入fs模块
const fs = require('fs');
                                    //function函数只有一个参数
fs.writeFile('./files/2.text','hello is 2.text',function (err) {

    //写入成功err的值就是null
    //写入失败返回的就是一个错误对象
    console.log(err);
})
