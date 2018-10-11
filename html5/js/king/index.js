const chior =[]; //乐队

// 只有会咕咕叫的才要  chedk？
// 代码 流程coding 组成乐队 办事流程
var chicken={
// sound:'咕叽咕叽'
    chickenSing:function(){
        console.log('咕叽咕叽');
    }
}

// 1000 要求 ，国家有999只chicken
// for(var i=0;i<999;i++){
//     if(typeof chicken.chickenSing=='function'){  //typeof对象调用自身的方法。
//         chior.push(chicken);
//     }

// }

// chior.push(chicken);

/*功能：加入合唱团
params：animal 动物对象
chior 加入新成员
*/


//封装yixia
function joinChior(){
    if(typeof animal.chickenSing=='function'){
        chior.push(animal);
    }
}

joinChior();