const Express = require('express');

const admin = new Express.Router();

// 登陆页面
admin.get('/login', (req, res)=>{
    res.render('admin/login')
})

// 登录路由验证
admin.post('/login', (req,res)=>{
    // 接收请求参数
    const {email, password} = req.body;
    if(email.trim().length == 0 || password.trim().length == 0) return res.status(400).render('admin/error',{msg: '邮件地址或密码错误'});
    
})
admin.get('/user', (req, res)=>{
    res.render('admin/user')
})

admin.get('./')

module.exports = admin;