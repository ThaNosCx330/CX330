const fs = require('fs');

fs.readFile('./files/1.text','utf-8',function (err,data) {
    if (err) {
        return console.log('读取失败' + err.message)
    }

    const arrold = data.split(' ');

    const arrnew = [];

    arrold.forEach(item => {
        arrnew.push(item.replace('=',':'));
    })
    const str = arrnew.join('\r\n');

    //const str = JSON.stringify(arrnew.join('\r\n'))

    fs.writeFile('./files/2.text',str,function (err) {
        if (err) {
            return console.log('写入失败' + err.message)
        }
        console.log('ok');

    })
})