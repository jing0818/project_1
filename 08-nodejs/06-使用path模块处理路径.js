const path=require('path');


let url=path.join(__dirname,'/file/1.txt');
// 获取文件名,
let txt=path.basename(url);
// 只获取文件名，不包括后缀名
let txt2=path.basename(url,'.txt');
// 获取文件扩展名
let extname=path.extname(url);
console.log(url);
console.log('---------');
console.log(txt);
console.log('----------');
console.log(extname);