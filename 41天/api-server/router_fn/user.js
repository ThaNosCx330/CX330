
//导入数据库模块
const myproject = require('../mysql/index')

//导入加密模块bcryptjs
const bcrypt = require('bcryptjs');

//注册的函数
exports.regUser = (req,res) => {

    let userinfo = req.body;

    if (!userinfo.username || !userinfo.password) {
        return res.cc('用户名不合法');
    }

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

}

//登录的函数

exports.login = (req,res) => {
    res.send('登录ok')
}