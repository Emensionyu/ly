wx.cloud.init({
  //初始化一下
  env:"lycoding-c11d73"
})

const db = wx.cloud.database()//初始化数据库
const _ =db.command //增加
const productsCollection = db.collection('products')

Page({
  onPullDownRefresh:function(){
    // console.log("下拉更新");
    productsCollection.get().then(res=>{
      this.setData({
        products:res.data
      },res=>{
        console.log("数据更新完毕")
        wx.stopPullDownRefresh();
      })
    })
  },
  onReachBottom:function(){
    console.log("上拉加载更多");
  },
  data:{
    page:1,
    products:[]
  },
  onLoad:function(){
    productsCollection
    .get()
    .then(res=>{
      this.setData({
        products:res.data
      })
      console.log(res.data); //res数据已到手
    })
  },
  click:function(event){
    //update view+1
    // database<-collection<-document
    productsCollection.doc(event.currentTarget.dataset.id).update({
      data:{
        view:_.inc(1)
      }
    })
    },
})