//app.js
App({
  onLaunch: function () {
    console.log('应用起动了');
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
       success: (response) => {
      //   const {slides,vehicles } =response.data
      //   console.log(slides,vehicles,stories); 
      //   this.globalData.slides = slides;
      //   this.globalData.vehicles = vehicles;
          Object.assign(this.globalData,response.data);
          //assign 赋值（复制）
          console.log(this.globalData,);
      }
        })
      },
  // 全局的数据 App.js 是全局的，
  // 用户的登录状态
  globalData: {
    motto: '老闵老闵你最棒'
  }
})

