

const cloud = require("wx-server-sdk")
const AppId = '1257917931'
const SecretKey = "3weIm5C7rX7e5Qer042veCZkkYBdu1xi"
const SecretId = "AKIDHUbYKu5i2CB0dAfijZJuMdlDVcXHGJbh"

const fs = require("fs") //modules exports
const path = require('path')
const {imageClient} = require('image-node-sdk')  //解构
cloud.init()



let imageClient = new imageClient({AppId,SelectId,SecretKey});

//云函数入口函数
exports.main = async(event,context)=>{
    return await imageClient.imgPornDetect({
        fromData:{
            // node 文件系统模块 fs rwd+，path 提供路径对象
            image:fs.createReadStream(path.join(__dirname,'./timg(1).jpg'))  //创建可读流
        },
        headers:{
            'content-type':'multipart/from-data'
        }    
    })
}