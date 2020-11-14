const Express = require('express');

const {adminRouter,homeRouter} = require('./router')

const app = new Express();

// 路由匹配路径
app.use('/home', homeRouter);
app.use('/admin', adminRouter);

// 监听端口
app.listen(80, ()=>{
    console.log('服务器启动成功，请访问localhost');
})