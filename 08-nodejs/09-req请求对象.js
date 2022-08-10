const http=require('http');

// 创建web服务器实例
const server=http.createServer();

// 为服务器实例绑定request事件，监听客户端的请求
server.addListener('request',function(req,res){
    /* 
        req是请求对象，它包含了与客户端相关的数据和属性，例如
        req.url是客户端请求的URL地址
        req.method是客户端的method请求类型
    */
    console.log(req.url);
    console.log('-----------');
    console.log(req.method);
})

// 启动服务器
server.listen(80,()=>{
    console.log('http server running at http://127.0.0.1');
})