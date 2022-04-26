// 导入 mysql 模块
const mysql = require('mysql')

// 创建数据库连接对象
const myproject = mysql.createPool({

  host: '127.0.0.1',

  user: 'root',

  password: 'admin123',

  database: 'project',
})

// 向外共享 db 数据库连接对象
module.exports = myproject;