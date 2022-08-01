const fs = require('fs');
const path = require('path');

// 定义正则表达式
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

let url = path.join(__dirname, './index.html');
fs.readFile(url, 'utf-8', function (err, data) {
    if (err) return console.log(err);

    resolveCSS(data);
    resolveJS(data);
    resolveHTML(data);
});


function resolveCSS(htmlStr){
    let str=regStyle.exec(htmlStr);
    let css=str[0].replace('<style>','').replace('</style>','');
    
    fs.writeFile(path.join(__dirname,'/时间案例/index.css'),css,function(err){
        if(err) return console.log(err.message);
        console.log('css写入成功');
    })
}

function resolveJS(htmlStr){
    let str=regScript.exec(htmlStr);
    let js=str[0].replace('<script>','').replace('</script>','');
    
    fs.writeFile(path.join(__dirname,'/时间案例/index.js'),js,function(err){
        if(err) return console.log(err.message);
        console.log('js写入成功');
    })
}

function resolveHTML(htmlStr){
    let str=htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname,'/时间案例/index.html'),str,function(err){
        if(err) return console.log(err.message);
        console.log('html写入成功');
    })
}

