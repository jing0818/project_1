// 导入Node.js内置的querystring模块
const qs=require('querystring');

const bodyParser=(req,res,next)=>{
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
}

module.exports={
    bodyParser
}