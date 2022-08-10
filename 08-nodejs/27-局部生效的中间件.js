const express=require('express');
const app=express();

let mw=function(req,res,next){
    console.log('局部中间件执行啦');
    next();
}

app.get('/user',mw,function(req,res){
    res.send('user....ok')
})


app.get('/student',function(req,res,next){
    console.log('我是student的局部中间件');
    next();
},function(req,res){
    res.send('student.....ok')
})


app.listen(80,()=>{
    console.log('服务器启动了');
})