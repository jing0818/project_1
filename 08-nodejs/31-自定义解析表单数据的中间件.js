const express=require('express');

// 导入Node.js内置的querystring模块
const qs=require('querystring');

const app=express();

// 这是解析表单数据的中间件
app.use((req,res,next)=>{
    // 定义一个str字符串，专门用来存储客户端发送过来的请求体数据
    let str='';
    // 监听req的data事件
    req.on('data',(chunk)=>{
        str+=chunk;
    })

    // 监听req的end事件
    req.on('end',()=>{
        // 在str中存放的是完整的请求体数据
        const body=qs.parse(str);
        req.body=body;
        next();
    })
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send('ok..');
})

app.listen(80,()=>{
    console.log('服务器启动了');
})