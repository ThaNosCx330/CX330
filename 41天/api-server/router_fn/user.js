
//导入数据库模块
const myproject = require('../mysql/index')

//导入加密模块bcryptjs
const bcrypt = require('bcryptjs');

//表单验证guize
const schema = require('../schema/user')

//tokenjwt
const jwt = require('jsonwebtoken')

//注册的函数
exports.regUser = async (req,res) => {
    let userinfo = req.body;
    try {
        /*验证*/
        await schema.getlogin.validateAsync(userinfo); 
         //定义sql查询语法
        let selectStr = 'select * from ev_users where username=?';

        //查询数据库
        myproject.query(selectStr,[userinfo.username],(err,result) => {
            if (err) {
                return res.cc(err)
            };

            if (result.length > 0) {
                return res.cc('用户名重复')
            };
            //调用bcryptjs加密模块的hashSync方法
            userinfo.password = bcrypt.hashSync(userinfo.password,10);

            //定义插入数据的sql语法
            let selectStr = 'insert into ev_users set ?';
            let newuser = {
                username : userinfo.username,
                password : userinfo.password
            }
            
            myproject.query(selectStr,newuser,(err,result) => {
                if (err) {
                    return res.cc(err);
                };

                if (result.affectedRows == '1') {
                    return res.cc('注册成功',0)
                }
            })
        })
    } catch (e) {
       res.send(e.message);
    }   


}

//登录的函数

exports.login = async (req,res) => {

    const userinfo = req.body
    try {
        /*验证*/
        await schema.getlogin.validateAsync(userinfo);
        
        //接收表单的数据
        let str = `select * from ev_users where username=?`

        myproject.query(str,userinfo.username,(err,result) => {
            if (err) {
                return res.cc(err)
            };

            if (result.length !== 1) {
                return res.cc('登录失败')
            };

            const newpassword = bcrypt.compareSync(userinfo.password,result[0].password)
            if (!newpassword) {
                return res.cc('密码或者用户名错误')
            }
            
            //加密token
            const secertKEY = 'jiangziyi';

            const newuser = {...result[0],user_pic : null,password : null};

            const newtoken = jwt.sign(newuser,secertKEY,{expiresIn:'10h'});

            res.send({
                status:0,
                message:'登录成功',
                token: 'Bearer ' + newtoken,
            })

        })

        
    } catch (e){
        res.send(e.message)
    }
}