链式调用 chain 
非常的优雅
很简单 将我们的方法面向对象化（prototype），每一个函数做完功能后 return this（对象）
/*this  语法*/

$('div') 返回一个jQuery（fn）对象
JQuery.prototype = {
    method:return this;
}
