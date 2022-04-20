const itheima = require('./index');
const timer = new Date();
const newtime = itheima.dateFormat(timer);
console.log(newtime);
const str = '<h1>hhh</h1>'
const newstr = itheima.changer(str);
console.log(newstr);