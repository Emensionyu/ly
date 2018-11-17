wx.cloud.init({

})
const db = wx.cloud.database();
Page({
  data:{
      ads:[],
      item:{
        user:{
          avatar:'',
          nickname:'ly',
          summary:"影子爱人"
        }
      }
    },
    onLoad:function(){
      db.collection('ads').get({
        //回调
        success:res=>{
          this.setData({
            ads:res.data
          })
        }
      })
    }
})