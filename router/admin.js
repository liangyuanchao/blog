const Express = require('express');

const admin = new Express.Router();

admin.get('/login', (req, res)=>{
    res.render('admin/login')
})

module.exports = admin;