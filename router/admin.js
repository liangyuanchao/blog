const Express = require('express');

const admin = new Express.Router();

admin.get('/', (req, res)=>{
    res.send('欢迎来到博客管理页面')
})

module.exports = admin;