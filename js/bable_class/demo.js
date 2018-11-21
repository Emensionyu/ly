// class Person {
//     // es6 constructor
//     constructor() {
//         this.name = name;
//     }
//     sayHello() {
//         return this.name;
//     }
// }
// console.log(Object.keys(Person.prototype));//Object.keys枚举  但它不可枚举
// console.log(Object.getOwnPropertyNames(Person.prototype));



// 手写babel 编译的es6代码？
// 让我们的"构造函数"不可以当作一般的函数来运行
// function _classCallCheck(instance,Constructor) {
//     if(!(instance instanceof Constructor)){
//         throw new TypeError("Cannot call a class as a function");
//     }
// }
// function Person(name) {
//     // 将Person函数作为普通函数来调用，
//     //前面加下划线（_）表示是私有的
//     _classCallCheck(this,Person);
//     this.name = name ;
// }



// Person('唐唐');
// es5 构造函数
function Person(name) {
    this.name = name;
}
Person.prototype = {
    sayHello: function() {
        return this.name;
    }
}
console.log(Object.keys(Person.prototype));//Object.keys枚举  但它不可枚举
console.log(Object.getOwnPropertyNames(Person.prototype));
// var lilei = new Person('lilei');//new 之后一定会返回一个对象。 运行之后{name:'lilei'}
// console.log(lilei);
// const hanmeimei = Person('hanmeimei');// 运行之后，undfined
// console.log(hanmeimei);