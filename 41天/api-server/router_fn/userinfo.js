const myproject = require('../mysql/index');

//导入验证的规则
const schema = require('../schema/userinfo')

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

exports.updateuserinfo = async (req,res) => {
        let userinfo = req.body;
    try {
        
        /*验证*/
        await schema.validateAsync(userinfo); 
        //定义sql查询语法
        res.cc("okkkk")
    } catch (e) {
        res.cc(e.message)
    }
}