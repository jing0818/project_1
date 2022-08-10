const express=require('express');
const app=express();

let m1=function(req,res,next){
    console.log('局部中间件执行啦');
    next();
}
let m2=function(req,res,next){
    console.log('局部中间件执行啦');
    next();
}

// 第一种定义多个局部中间件的方式
app.get('/',m1,m2,function(req,res){
    res.send('get...ok');
})

// 第二种定义多个局部中间件的方式
app.get('/',[m1,m2],function(req,res){
    res.send('get...ok');
})


app.listen(80,()=>{
    console.log('服务器启动了');
})