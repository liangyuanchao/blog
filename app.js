const Express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {adminRouter,homeRouter} = require('./router')
const session = require('express-session');

const app = new Express();

require('./model/connect');
require('./model/user');
// 处理post请求参数
app.use(bodyParser.urlencoded({extended: false}))

// 配置session
app.use(session({secret: 'secret key'}));

// 告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'))
// 告诉express框架模板的默认后缀时什么
app.set('view engine', 'art');
// 当渲染后缀为art的模板时 所使用的模板引擎是什么
app.engine('art', require('express-art-template'));

// 开放静态资源
app.use(Express.static(path.join(__dirname, 'static')));

// 登录拦截
app.use('/admin', (req, res, next) => {
    // 判断用户是否登录
    if(req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    }else{
        // 用户登录状态，将请求放行
        next();
    }
})
// 路由匹配路径
app.use('/home', homeRouter);
app.use('/admin', adminRouter);

// 监听端口
app.listen(80, ()=>{
    console.log('服务器启动成功，请访问localhost');
})