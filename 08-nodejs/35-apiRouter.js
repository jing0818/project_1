const express=require('express');
const router=express.Router();

// 在这里挂载对应的路由

// 定义get接口
router.get('/get',(req,res)=>{
    // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const query=req.query;
    res.send({
        status:0, //0表示处理成功，1表示处理失败
        msg:"请求成功", //状态的描述
        data:query  //需要响应给客户端的数据
    })
})

// 定义post接口
router.post('/post',(req,res)=>{
    // 通过req.body获取客户端通过json或form表单，发送到服务器的数据
    const body=req.body;
    res.send({
        status:0, // 0表示处理成功,1表示处理失败
        msg:'post请求成功', // 状态的描述
        data:body // 需要响应给客户端的数据
    })
})

module.exports=router;