const Joi = require('joi')

const {User} = require('../../model/user')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const schema = {
        username: Joi.string().min(2).max(10).required().error(new Error('用户名不符合要求')),
        email: Joi.string().email().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        rol: Joi.string().valid('normal', 'admin').required().error(new Error('角色值不合法')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    };


    try {
        // 实施验证
         await Joi.validate(req.body, schema);
    } catch (e) {
        // 验证没有通过
        // e.message
        // 重定向回用户添加页面
        return res.redirect(`/admin/user-edit?message=${e.message}`);
    }
    let user = await User.findOne({email: req.body.email});
    
    // 如果用户已经存在，邮箱地址已经被占用
    if(user) {
        // 重定向到用户添加页面
        return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`);
    }
    // 对密码进行加密
    const salt = bcrypt.genSalt(10);
    // 加密
    const password = bcrypt.hash(req.body.password, salt);
    // 替换密码
    req.body.password = password;

    // 将用户信息添加到数据库中
    await User.create(req.body);
    // 重定向到用户列表页面
    req.redirect('/admin/user');
}