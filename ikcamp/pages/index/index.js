//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hiddenLoading:false,
    page:1,
    pageSize:4,
    days:3,
    totalSize:0,
    hasMore:true, //是否还有更多。
    articleList:[],
    motto: 'Hello World',  
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.requestArticle()
    
  },

  requestArticle:function(){
    wx.request({
      url:"https://www.easy-mock.com/mock/5bca92a3e6742c1bf8220bfd/ikcamp/#!method=get"
      ,
      success:(res)=>{
        console.log(res.data.data);
        let list = this.data.articleList;
        list = [...list, ...res.data.data];
        // console.log(list);
        list.push(res.data.data[this.data.page-1])
        console.log(list)
        this.setData({
          hiddenLoading: true,
          articleList: list

        // console.log(res);
        //  const list=
        //   this.data.articleList
        //   list.push(res.data.data[(this.data.page)-1])
        //   this.setData({
        //     hiddenLoading:true,
        //     articleList:list
        //   })
     })
    }
  })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReachBottom(){
    if(this.data.hasMore){
      let nextPage=
      this.data.page +1;  
      this.setData({
        page:nextPage  /*? */
      });
      this.requestArticle();
    }
console.log('到页面底部了');
}
})