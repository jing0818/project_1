const fs=require('fs')

/* 
    使用fs.readFile()方法，可以读取指定文件中的内容。语法格式如下：
    fs.readFile(path,[options],callback)

    参数1：必选参数，字符串，表示文件路径
    参数2：可选参数，表示以什么编码格式来读取文件
    参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。
*/
fs.readFile('./file/1.txt','utf-8',function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});