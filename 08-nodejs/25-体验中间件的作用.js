const express=require('express');

const app=express();

// 定义一个最简单的中间件函数
const mw=function(req,res,next){
    // 获取到请求到达服务器的时间
    const time=Date.now();
    // 为 req 对象，挂载自定义属性，从而把时间共享给后面的路由
    req.statrTime=time;
    next();
}

// 全局生效的中间件
app.use(mw);

app.get('/',(req,res)=>{
    res.send('get...ok'+req.statrTime)
})

app.post('/',(req,res)=>{
    res.send('post...ok'+req.statrTime)
})


app.listen(80,()=>{
    console.log('服务器启动了');
})