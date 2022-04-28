const { result } = require('@hapi/joi/lib/base');
const myproject = require('../mysql/index');

//导入验证的规则
const schema = require('../schema/user')


//导入密码重置加密模块
const bcrypt = require('bcryptjs');

//获取用户信息
exports.getuserinfo = (req,res) => {
    let str = 'select id, username, nickname, emial, user_pic from ev_users where id=?'

    myproject.query(str,req.auth.id,(err,result) => {
        if (err) {
            return res.cc(err)
        };

        if (result.length !== 1) {
            return res.cc('没有数据')
        };

        res.send({
            status:0,
            message: '查询成功',
            data: result[0]
        })
    })
};

//实现更新用户信息
exports.updateuserinfo = async (req,res) => {
        let userinfo = req.body;
    try {
        console.log();
        /*验证*/
        await schema.updateuserinfo.validateAsync(userinfo);

        //定义sql查询语法
        let str = 'update ev_users set ? where id=?';
        myproject.query(str,[req.body,req.body.id],(err,result) => {
            if (err) {
                return res.cc(err.message);
            }
            if (result.affectedRows !== 1) {
                return res.cc('更新用户失败');
            }
            res.cc('更新用户成功',0)
        })
    } catch (e) {
        res.cc(e.message)
    }
};


//重置密码实现
exports.updatepwd = async (req,res) => {
    let userinfo = req.body;
    try {

        //验证
        await schema.updatepwd.validateAsync(userinfo);

        let str = 'select * from ev_users where id=?'

        //数据库根据id查询用户是否存在
        myproject.query(str,req.auth.id,(err,result) => {
            if (err) {
                return res.cc(err)
            };

            if (result.length !== 1) {
                return res.cc('用户不存在');
            }
            
            //验证输入的旧密码是否和数据库保存的密码一直
            let newstr = bcrypt.compareSync(userinfo.oldpwd,result[0].password);

            if (!newstr) {
                return res.cc('原密码错误')
            }

            //更新新密码sql语句
            let str = 'update ev_users set password=? where id=?';

            let newpwd = bcrypt.hashSync(userinfo.newpwd,10);

            myproject.query(str,[newpwd,req.auth.id],(err,result) => {
                if (err) {
                    return res.cc(err);
                };

                // SQL 语句执行成功，但是影响行数不等于 1
                if (result.affectedRows !== 1) {
                    return res.cc('更新密码失败');
                };

                res.send({
                    status:0,
                    message: '密码重置成功'
                })
            });
        })
    } catch (e) {
        res.cc(e.message)
    }

};

//更新头像实现
exports.updateAvatar = async (req,res) => {
    let userinfo = req.body
    try {

        await schema.updateimg.validateAsync(userinfo)
        let str = 'update ev_users set user_pic=? where id=?';

        myproject.query(str,[userinfo.avatar,req.auth.id],(err,result) => {
            if (err) return res.cc(err);

            if (result.affectedRows !== 1) {
                
                return res.cc('更新图片失败');
            };
            //console.log(req.auth);
            res.cc("更新成功啦",0)
        })
    } catch (e) {
        res.send(e.message)
    }
}