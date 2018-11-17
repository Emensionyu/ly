
Page({
  // 云函数是独立的node环境 新建 安装依赖 上传
  // 云开发能力，
  http:function(){
    wx.cloud.callFunction({
      name:"http",
      data:{a:1}
    }).then(res=>{  //异步的同步写法
      // 云函数的执行是异步的  参数data   main函数在index.js里 是async函数 在这个函数内部将发生费时的事情(比如：ajax，文件上传)
      // 可以用同步的写法
      console.log(res);
      console.log(res.result);
      })
  }
})