const http=require('http');

// 创建web服务器实例
const server=http.createServer();

// 为服务器实例绑定request事件，监听客户端的请求
server.addListener('request',function(req,res){
    /* 
        res是响应对象，它包含了与服务器相关的数据和属性，例如：
        要发送到客户端的字符串
        res.end()方法的作用：
        向客户端发送指定的内容，并结束这次请求的处理过程
    */
    const str=`Your request url is ${req.url}, and request method is${req.method}`;

    // 为了防止中文显示乱码的问题，需要设置响应头 Contenet-Type 的值为text/html;charset=utf-8
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(str);
})

// 启动服务器
server.listen(80,()=>{
    console.log('http server running at http://127.0.0.1');
})