const express=require('express');
const app=express();

// 定义第一个全局中间件
app.use(function(req,res,next){
    console.log('调用了第一个全局中间件');
    next();
})
// 定义第二个全局中间件
app.use(function(req,res,next){
    console.log('调用了第二个全局中间件');
    next();
})

// 定义一个路由
app.get('/',function(req,res){
    res.send('get....ok')
})

app.listen(80,()=>{
    console.log('服务器启动了');
})