const date=require('../znsd-utlis');

const sj=date.dateFormat(new Date());
console.log(sj);

console.log('---------------');

let str=date.htmlEscape('<h1>"我是&符号呀"</h1>');
console.log(str);

console.log('-------------');

let str2=date.htmlUnEscape(str);
console.log(str2);