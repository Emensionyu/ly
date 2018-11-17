// 云函数入口文件
const rq = require("request-promise") //请求文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// event 调用云函数时，传递的data isbn

exports.main = async (event, context) => {
    const isbn = event.isbn; //获得data
    const res = rq('https://api.douban.com/v2/book/isbn/'+isbn)
    .then(html=>{
        console.log(html);    
        return html
    }).catch(err => {
        console.log(err);
    })
    return res;
}