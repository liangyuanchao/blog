const guard =  (req, res, next) => {
    // 判断用户是否登录
    if(req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    }else{
        // 用户登录状态，将请求放行
        next();
    }
}

module.exports = guard;