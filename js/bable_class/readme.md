1. babel class 编译
 .babel 不可少 presets数组 env
 - js 面向对象是原型式的 es5 
 function Person(){} 构造函数
 Person.prototype = {}
 es6 class constructor 只不过是语法糖而已
 - es5 的构造函数可以作为普通函数来执行，
 class es6 babel 编译时杜绝？

 - es6的prototype 属性不可枚举enumerable
 Object.keys  先组数组再遍历
 Object.getOwnPropertyNames(Person.prototype)//类prototype链上的元素属性

 两点es6：
 1. 不独立运行构造函数。一定要new
 2. 不可枚举