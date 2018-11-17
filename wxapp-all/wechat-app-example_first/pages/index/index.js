//index.js
//获取应用实例
//刷新动态球颜色
var iconColor = [
  '#42BD56', '#31A040'
];
const app = getApp()

Page({
  data: {
    loadingMore:false, //是否加载更多
    totalRecord:0,//图书总数为0

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    isInit: false, //是否第一次进入应用
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
   //页面显示获取设备屏幕高度，以适配scroll-view组件高度**
   onShow: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          scrollHeight: res.windowHeight - (100 * res.windowWidth / 750) 
          //80为顶部搜索框区域高度 rpx转px 屏幕宽度/750
        });
      }
    })
  },
  
  //搜索输入框输入取值
  searchInputEvent:function(e){
    this.setData({
      searchkey:e.detail.value
    });
  },

  //搜索按钮点击事件
  searchClickEvent:function(){
    if(!this.data.searchkey){
      return
    }
    this.setData({
      pageIndex:0,pageData:[]
    });
    requestData.call(this);        /**/ 
  },

    //下拉请求数据
    scrollLowerEvent: function (e) {
      if (this.data.loadingMore)
        return;
      requestData.call(this);
    },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
