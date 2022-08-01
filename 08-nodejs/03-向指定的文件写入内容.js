const fs=require('fs');

/* 
    使用fs.writeFile()方法，可以向指定的文件中写入内容，语法格式如下：
        fs.writeFile(file,data,[options],callback);
        参数1：必选参数，需要指定一个文件路径的字符串，表示文件存放路径
        参数2：必选参数，表示要写入的内容
        参数3：可选参数，表示以什么格式写入文件内容，默认值是utf8
        参数4：
*/

let str='我是通过node.js写入进来的';
fs.writeFile('./file/2.txt',str,'utf-8',function(error){
    if(error){
        console.log(error);
    }
})