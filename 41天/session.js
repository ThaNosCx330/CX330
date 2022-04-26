const express = require("express")

const app = express();

//导入session第三方中间件
const session = require('express-session')

//用app.use()配置第三方中间件
app.use(
    session({
        secret: 'project',
        resave: false,
        saveUninitialized: true


    })
);


//解析表单数据
app.use(express.urlencoded({ extended : false }));

app.post('/api/post',(req,res) => {

    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({
            status: 0,
            message: '登录失败'
        })
    } 

    //只有成功导入session这个中间件才可以使用req.session
    //不然报错

    //如果用户名和密码都正确，
    //就把用户名和密码存入到session自定义的属性
    req.session.user = req.body;

    //把登录的状态也存入

    req.session.login = true;

    res.send({
        status: 1,
        message: '登录成功',
    })
})

app.get('/api/get',(req,res) => {
    if (!req.session.login) {
        return res.send({
            status:0,
            message:"ERR"
        })
    }

    res.send({
        status:1,
        message: 'success',
        data:req.session.user.password
    })
})


app.post('/api/logout',(req,res) => {
    req.session.destroy();

    res.send('退出成功')
})

app.listen(8080,() => {
    console.log('8080开启OK');
})