// 在一个自定义模块中 ，默认情况下，module.exports={}

// 向 module.exports 对象上挂载 username 属性
module.exports.username='张三';

// 向 module.exports 对象上挂载 sayHello 方法
module.exports.sayHello=function(){
    console.log(`你好，我是${this.username}`);
}