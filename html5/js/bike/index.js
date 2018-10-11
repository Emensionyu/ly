//首字母大写，构造函数
var BicycleShop;
console.log(BicycleShop);//undefined
BicycleShop = null;
console.log(BicycleShop);
BicycleShop = function(){

}
// console.log(typeof BicycleShop);

// JS BicycleShop  动态类型
// 变量=变量名+ 值+类型
// 变量没有赋值前，undefined，
// 变量的类型由值来决定
// 类型决定变量的指责和功能

var bicycleShop = new BicycleShop('叶斌斌大佬的自行车店');
console.log(bicycleShop.name);