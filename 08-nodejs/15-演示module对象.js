/* 
    向外共享模块作用域中的成员
    
    module.exports对象
        在自定义模块中，可以使用module.exports对象，将模块内的成员共享存钱，供外界使用
        外界用require()方法导入自定义模块时，得到的就是module.exports所指向的对象。

    共享成员是的注意点
        使用 require()方法导入模块时，导入的结果，永远以module.exports指向的对象为准
    
    exports对象
        由于module.exports单词写起来比较复杂，为了简化向外共享成员的代码，Node提供了exports对象。
        默认情况下，exports和module.exports指向同一个对象。最终共享的结果，还是以module.exports指向的对象为准
*/


// 在外界使用require导入一个自定义模块的时候，得到的成员
// 就是那个模块中，通过module.exports指向的那个对象
const m=require('./test/m3');

m.sayHello();
