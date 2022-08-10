## 安装
```

npm install znsd-utils
```

## 导入
```js
const znsd=require('znsd-utils');
```

## 格式化时间
```js
// 调用dateFormat对时间进行格式化
const dtStr=znsd.dateFormat(new Date())
// 结构 2022-08-02 13:14:52
console.log(dtStr);
```

## 转义HTML中的特殊字符
```js
// 带转换的HTML字符串
let strHTML='<h1>"我是&符号呀"</h1>';
// 调用htmlEscape方法进行转换
let str=date.htmlEscape(strHTML);
// 转换的结果  &lt;h1&gt;&quot;我是&amp;符号呀&quot;&lt;/h1&gt;
console.log(str);
```

## 还原HTML中的特殊字符
```js
// 带转换的HTML字符串
let strHTML='&lt;h1&gt;&quot;我是&amp;符号呀&quot;&';
// 调用htmlEscape方法进行转换
let str=date.htmlEscape(strHTML);
// 转换的结果  '<h1>"我是&符号呀"</h1>'
console.log(str);
```

## 开源协议
ISC