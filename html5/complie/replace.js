var str = 'Visit Microsoft!';
console.log(str.replace('Microsoft','alibaba'));
var money = '$sdfgfxx$cdsbbd$';
console.log(money.replace(/\$/g,'￥'));
//  /$/为其表达方式，g为一直匹配。两斜杠(//（正则表达式格式）)加\(转义符)表示正则表达式

let html = `abc{{username}}edfcccc`;
let reg = /\{\{(.*)\}\}/gm;
console.log(reg.test(html),RegExp.$1);//返回第一个分组的值
// 测试一下html是否符合条件