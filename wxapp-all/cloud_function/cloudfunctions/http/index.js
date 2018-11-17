
//require 表示js模块化 commonJS require+module.exports
// import from   export default es6模块化 es6在node6一下不支持
const cloud = require("wx-server-sdk");
const got = require('got');
cloud.init();
// 拿数据库
const db = cloud.database();


// async 是函数修饰符，es7可以让异步的代码同步化
exports.main = async()=>{
    const photoInfos = [];
    // 从photos数据表中拿数据
    const photos = await db.collection('photos').get();
    console.log(photos);
    for(let i =  0;i<photos.data.length;i++){
        const photo = photos.data[i];
        let openid = photo._openid;
        const user = await db.collection('userInfo').where({
            _openid:openid
        }).get();                 
        if(user.data.length>0){
            //给photo动态添加.user属性。让他有作者的名字。
            photo.user = user.data[0]
        }
        photoInfos.push(photo);
    }
    return photoInfos;
}
    //async()=>{}  修饰箭头函数表示为 main函数。可以用await
    // 费时间 异步的 但是想保持执行的顺序和阅读的顺序 用await
    // 用户表 userinfo photos 图片
    // // database photos Map   用await先查一下database里的photos表看看有那些图片 再将photos里的openid提出找到userinfo'
    // const photos = [{
    //     _id:'',
    //     _openid:'',
    //     image:"",
    //     // 用户的信息
    //     user:{
    //         nickname:'旅梦开发团',
    //         province:"南昌"
    //     }
    // }]

//     let getResponse = await got('httpbin.org/get')
//     console.log(getResponse);
//     let postResponse = await got('httpbin.org/post',{
//         method :'POST',
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             title:'这是标题',
//             value:123
//         })
//     })
//     console.log(postResponse);    //await 让我们的代码等待一下 只有async 才可以用
//     return postResponse.body
// }
