//导入mysql模块
const mysql = require('mysql');

const express = require('express');

const cors = require('cors');

const router = express.Router();

const app = express();

//建立mysql的连接关系
const mydata = mysql.createPool({

    host: '127.0.0.1',      //数据库的ip地址

    user: 'root',           //用户名

    password: 'admin123',   //密码

    database: 'project'       ///操作哪个数据表
});

const user = { username : 'andy', password : 111, id : 7};

const selectStr = 'update user1 set status=? where id=?'

router.get('/get',(req,res) => {

    //测试mysql能否正常工作
    mydata.query(selectStr,[1,8],(err,result) => {

        if (err) return console.log(err.message);
    
        //console.log(result);
        if (result.affectedRows === 1) {
            //响应数据
            res.send({
                status : 0,
                message : 'ok',
                data : result
            })
        }
    
    });

});






app.use(cors());

app.use('/api',router);

app.listen(8080,() => {
    console.log('8080启动ok');
})