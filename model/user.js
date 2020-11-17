const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

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

async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    const user = await User.create({
        username: 'itheima',
        email: 'lyc@itcast.cn',
        password: pass,
        role: 'admin',
        state: 0
    })
}

// createUser();


module.exports = {
    User
}