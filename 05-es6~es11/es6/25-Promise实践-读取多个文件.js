//导入fs模块，来操作文件
const fs = require('fs');


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

const p = new Promise((resolve, reject) => {
    fs.readFile("05-es6~es11/es6/file/为学.txt", 'utf-8', (err, data) => {
        if (err) {
            reject(err);
        }
        resolve(data);
    });
})

p.then((value) => {
    return new Promise((resolve, reject) => {
        fs.readFile("05-es6~es11/es6/file/春日.txt", 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve([value, data]);
        });
    })
}, (reason) => {
    console.log(reason);
}).then((value) => {
    return new Promise((resolve, reject) => {
        fs.readFile("05-es6~es11/es6/file/小池.txt", 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            console.log(typeof value);
            resolve([...value, data]);
        });
    })
}, (reason) => {
    console.log(reason);
}).then((value) => {
    console.log(value.join('\r\n'));
}, (reason) => {
    console.log(reason);
})