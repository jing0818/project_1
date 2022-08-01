const fs = require('fs');

// fs.readFile('./file/1.txt', 'utf-8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// })


// fs.readFile('C:\\Users\\唐靖\\Desktop\\web\\08-nodejs\\file\\1.txt', 'utf-8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// })

// __dirname表示当前文件所处的目录
console.log(__dirname);
console.log('----------------');
fs.readFile(__dirname+'/file/1.txt','utf-8',function(err,data){
    if(err){
        return console.log(err);
    }
    console.log(data);
})