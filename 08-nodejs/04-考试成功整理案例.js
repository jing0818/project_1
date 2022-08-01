const fs = require('fs');

fs.readFile('./file/成绩.txt', 'utf-8', function (error, data) {
    if (error) {
        return console.log('出错了：' + error);
    }
    let arr = data.replace(/=/g,':').split(' ');
    let str = arr.join('\r\n');
    fs.writeFile('./file/成绩-ok.txt',str,function(err){
        if(err){
            return console.log(err);
        }
        console.log('文件整理成功');
    })
})