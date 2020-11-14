const Express = require('express');

const home = new Express.Router();

home.get('/', (req, res)=>{
    res.send('欢迎来到博客首页')
})

module.exports = home;