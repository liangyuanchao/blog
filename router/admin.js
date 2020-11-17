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

// 创建用户页面路由
admin.get('/user-edit', require('./admin/user-edit'))

// 创建用户表单提交
admin.post('/user-edit', require('./admin/user-edit-fn'))



module.exports = admin;