const Express = require('express');

const app = new Express();

app.listen(80, ()=>{
    console.log('服务器启动成功，请访问localhost');
})