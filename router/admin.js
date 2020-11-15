const Express = require('express');

const admin = new Express.Router();

admin.get('/login', (req, res)=>{
    res.render('admin/login')
})

admin.get('/user', (req, res)=>{
    res.render('admin/user')
})

module.exports = admin;