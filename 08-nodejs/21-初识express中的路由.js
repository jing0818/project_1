const express = require('express');

const app = express();

// 挂载路由
app.get('/', (req, res) => { res.send('Hellow world!') })
app.post('/', (req, res) => { res.send('Post Request!') })

app.listen(80, () => {
    console.log('服务器启动了');
})