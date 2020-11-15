const Express = require('express');
const {User} = require('../model/user')

const admin = new Express.Router();

// 登陆页面
admin.get('/login', (req, res)=>{
    res.render('admin/login')
})

// 登录路由验证
admin.post('/login',async (req,res)=>{
    // 接收请求参数
    const {email, password} = req.body;
    if(email.trim().length == 0 || password.trim().length == 0) return res.status(400).render('admin/error',{msg: '邮件地址或密码错误'});
    // 根据邮箱地址查询用户地址
    let user = await User.findOne({email});
    if(user){
        // 将客户端传递过来的密码或用户进行查询
        if(password == user.password){
            // 登陆成功
            res.send('ok')
        }else{
            res.status(400).render('admin/error',{msg: '邮箱地址或密码错误'})
        }
    }else{
        res.status(400).render('admin/error',{msg: '邮箱地址或密码错误'})
    }
})
admin.get('/user', (req, res)=>{
    res.render('admin/user')
})

admin.get('./')

module.exports = admin;