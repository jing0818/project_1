const express=require('express');

const customBodyParser=require('./33-custom-body-parser');

const app=express();

// 这是解析表单数据的中间件
app.use(customBodyParser.bodyParser)

app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send('ok..');
})

app.listen(80,()=>{
    console.log('服务器启动了');
})