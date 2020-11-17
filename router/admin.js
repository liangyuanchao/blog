const Express = require('express');

const admin = new Express.Router();

// 登陆页面
admin.get('/login',require('./admin/loginPage'))

// 登录路由验证
admin.post('/login',require('./admin/login'))

// 用户列表页
admin.get('/user', require('./admin/userPage'))

// 退出功能
admin.get('/logout', require('./admin/logout'))

module.exports = admin;