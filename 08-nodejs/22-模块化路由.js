// 导入路由模块
const userRouter=require('./23-roter');
const express=require('express');

const app=express();

// 使用app.use()注册路由模块
// 注意：app.use()函数的作用，就是来注册全局中间件
app.use('/api',userRouter);

app.listen(80,()=>{
    console.log('服务器启动了');
})