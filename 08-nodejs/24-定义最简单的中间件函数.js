const express=require('express');

const app=express();

// 定义一个最简单的中间件函数
const mw=function(req,res,next){
    console.log("调用了中间件函数");
    // 把流转关系，转交给下一个中间件或路由
    next();
}

// 全局生效的中间件
app.use(mw);

app.get('/',(req,res)=>{
    res.send('get...ok')
})

app.post('/',(req,res)=>{
    res.send('post...ok')
})


app.listen(80,()=>{
    console.log('服务器启动了');
})