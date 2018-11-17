//json object 对象字面量
//描述着，对象就出来啦。
var xiaoming={
    name:"小明",
    sex:"男",
    single:true,
    classroom:"161",
    hometown:"财大",
    sendFlower:function(target/*形参*/){
         // 将小明传给美女们收花的方法 
         //在对象 this 指向对象本身
        target.receiveFlower(this);
    }
};

//js是一门动态语言，简单，随意，表现力；
/*songhua ?
 json 构建了两个对象  现实世界中真有的属性 描述出来了 动作
 class属性 方法 */

var xiaohong={
    name:'小红',
    sex:'女',
    single:true,
    classroom:"161",
    hometown:"东理",
    receiveFlower:function(){
        if(this.name =='小丽'){
            console.log('小红收到鲜花');   
        }else{
            console.log('我只喜欢你 小丽。');
        }
   
    },
    ListenGoodMod:function(){
        setTimeout(()=>{
            //定时器
            this.receiveFlower();
        },10000);
    }
};

/*又要一个对象，小丽，json
对象间的复杂关系 设计模式
小明 先送小丽 代理 proxy
小丽了解小红情况 有无朋友 心情如何
*/
var xiaoli={
    name:'小丽',
    sex:'女',
    single:true,//weishayidingdanshen   自己收花 实现同一个接口interface。
    hometown:'赣州',
    // receiveFlower
    receiveFlower:function(sender){
        // console.log(sender);
    // if(sender.name!='小明'){
    //     console.log('gun');
    // }else{
    //     console.log('we are family!');
    // }
        // xiaohong.receiveFlower(sender); 
        
        if(this.islikexiaoming){
            console.log('其实我喜欢你');
        }else{
            console.log('好的，我帮你试试小红') ;
            xiaohong.ListenGoodMod();
        }
       
    }
    //小丽咋办。要送花！
}
console.log(xiaoming.name);
console.log(xiaohong.name);
console.log(xiaoli.name);
// 送花对象变了 只要实现同样的方法（接口） 实现对象的互换 
// proxyable 
//xiaoming.sendFlower)(xiaohong);   //扔了。
xiaoming.sendFlower(xiaoli);//好吧。看个电影试试。
// 如何优化？小红心情不好，小红心情好再送花。10s之后心情好。
//  xiaoli.receiveFlower.islikexiaoming;
// xiaoming.sendFlower(xiaohong);
console.log(xiaoli.islikexiaoming);