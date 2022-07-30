//导入fs模块，来操作文件
const fs = require('fs');
const $=require('jquery');

//调用readFile()方法读取文件
//参数1：文件路径，（绝对路径和相对路径都行）
//参数2：指定文件编码格式，一般默认utf-8
//参数3：回调函数，（第一个参数为错误信息，第二个为读取的文件内容）
// fs.readFile("./05-es6~es11/es6/file/为学.txt", "utf-8", function (err, data) {
//     //数据读取失败，err为一个对象
//     //数据读取成功，err为null
//     //err.message打印错误的信息
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     //数据读取失败，data为undefined
//     //数据读取成功，data为文本内容
//     console.log(data);
// })


function sendAjax(){
    return new Promise((resolve, reject)=>{
        $.ajax({
            url:'http://www.liulongbin.top:3006/api/getbooks',
            type:'get',
            success:function(data){
                console.log('成功了');
                resolve(data);
            },
            error:function(err){

                console.log('失败了');
                reject(err);
            }

        })
    })
}


async function fn(){
    let p=await sendAjax();
    console.log(p);
}

fn();