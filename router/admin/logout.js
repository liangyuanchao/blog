module.exports = (req, res) => {
    // 删除 session
    req.session.destroy(() => {
        // 删除 cookie
        res.clearCookie('connect.sid');
        // 重定向用户登录页面
        res.redirect('/admin/login');
    })
}