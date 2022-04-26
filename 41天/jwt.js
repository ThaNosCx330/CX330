const express = require("express")

const app = express()

const jwt = require('jsonwebtoken')

const cors = require('cors')

app.use(cors());

app.use(express.urlencoded({extended:false}))

const secrettKEY = 'jiangziyi'

var { expressjwt: expressJWT1 } = require("express-jwt");

app.use(expressJWT1({ secret:secrettKEY, algorithms: ["HS256"] }).unless({path:[/^\/api\//]}))

app.post('/api/post',(req,res) => {
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({
            status:1,
            message: '登录失败'
        })
    }
    const newtoken = jwt.sign({username:req.body.username},secrettKEY,{expiresIn:'120s'})
    res.send({
        status:0,
        message:'登录成功',
        token:newtoken
    })
})

app.get('/get',(req,res) => {
    res.send({
        status:0,
        message:'获取数据成功',
        data:[req.user,req.auth]
    })
})

app.use((err,req,res,next) => {
    if (err.name === 'UnauthorizedError') {
        res.send({
            status:1,
            message: '无效的token',
            data: err.name
        })
    }
    res.send({
        status:1,
        message:'未知错误'
    })
})

app.listen(8080,() => {
    console.log('8080OK');
})