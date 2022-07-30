// 静态
// import * as m1 from './hello.js';


var btn=document.querySelector('button');

btn.addEventListener('click',function(){
    // 动态
    import('./hello.js').then(module=>{
        module.hello();
    })
})