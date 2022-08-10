const http=require('http');

// 创建web服务器实例
const server=http.createServer();

// 为服务器实例绑定request事件，监听客户端的请求
server.addListener('request',function(req,res){
    console.log(req);
    console.log('-----------');
    console.log(res);
})

// 启动服务器
server.listen(80,()=>{
    console.log('http server running at http://127.0.0.1');
})