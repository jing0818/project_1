const express=require('express');

const app=express();

// 在这里，调用express.static()方法，快速的对外提供静态资源
// app.use(express.static('./clock'));

/* 
    挂载路径前缀
        如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式
*/
app.use('/clock',express.static('./clock'))

app.listen(80,()=>{
    console.log("服务器启动了");
})