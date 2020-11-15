const mongoose = require('mongoose')

// 创建集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [2, '用户名至少2位'],
        maxlength: [10, '用户名最多10位']
    },
    email:{
        type: String,
        // unique 字段保证邮箱地址在插入数据库时不重复
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    // state 状态  0 启用状态  1 禁用状态
    state: {
        type: Number,
        default: 0
    }
})

// 使用集合创建集合
const User =  mongoose.model('User', userSchema);

// 测试代码
// User.create({
//     username: 'itheima',
//     email: 'itheima@itcast.cn',
//     password: '123456',
//     role: 'admin',
//     state: 0
// }).then(()=>console.log('用户创建成功')).catch(err=>console.log(err, '用户创建失败'))

module.exports = {
    User
}