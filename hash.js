// 导入bcrypt
const brcypt = require('bcrypt');


async function run(){
    // 生成随机字符串
    const salt = await brcypt.genSalt(10);
    // 对密码进行加密
    const result = await brcypt.hash('123456', salt);
    console.log(salt);
    console.log(result);
}
run();