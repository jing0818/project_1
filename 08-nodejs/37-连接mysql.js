const mysql=require('mysql');

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123',
    database:'mp'
})

console.log(db);

// 查询
// db.query("select * from user",(err,data)=>{
//     if(err) return console.log(err.message);
//     console.log(data);
// })

// 插入数据
let user={
    username:"wangba",
    password:"123456",
    name:"王八",
    age:28,
    email:"wnagba@itcast.cn"
}
// const addSqlStr='insert into user(username,password,name,age,email) values(?,?,?,?,?)'

// db.query(addSqlStr,[user.username,user.password,user.name,user.age,user.email],(err,data)=>{
//     if(err) return console.log(err.message);
//     console.log('------------------------');
//     console.log(data);
// })


// 简便写法
const addSqlStr='insert into user set ?'

db.query(addSqlStr,user,(err,data)=>{
    if(err) return console.log(err.message);
    console.log('------------------------');
    console.log(data.affectedRows);
})