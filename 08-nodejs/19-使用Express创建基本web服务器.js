const express=require('express');

// 创建web服务器
const app=express();


/* 
    参数1：客户端请求的URL地址
    参数2：请求对应的处理函数
        req:请求对象(包含了与请求相关的属性与方法)
        res:响应对象(包含了与响应相关的属性与方法)
*/

// 监听GET请求
// 通过app.get()方法，可以监听客户端的GET请求
app.get('/user',function(req,res){
    // 通过req.query对象，可以访问客户端通过查询字符串的形式，发送到服务器的参数
    console.log(req.query.name);
    // 调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send({name:'zs',age:20,gender:'男'});
})

// URL地址中，可以通过 :参数名 的形式，匹配动态参数值
app.get('/user/:id',(req,res)=>{
    // req.params模式是一个空对象
    // 里面存放看通过 : 动态匹配到的参数值
    console.log(req.params);
    res.send(req.params);
})

// 监听POST请求
// 通过app.post()方法，可以监听客户端的POST请求
app.post('/user',function(req,res){
    // 调用express提供的res.send()方法，向客户端响应一个文本字符串
    res.send('post...ok');
})

// 启动web服务器
app.listen(80,()=>{
    console.log('服务器启动了');
})