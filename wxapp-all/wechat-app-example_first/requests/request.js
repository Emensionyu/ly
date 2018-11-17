import api from './api'   //引入api文件
import utils from '../utils/util'


// 在小程序里面。要获取数据必须用到 wx.request 既然都要用，可以封装一个wx.request。
// url 地址
function request(url, data, successCb, errorCb, completeCb) {
    wx.request({
      url,
      data,
      method: 'GET',
      header:{
        "Content-Type":"json"
      },
      success: (res) => {
        if (res.statusCode == 200 && utils.isFunction(successCb))
          successCb(res.data)
      },
      error: () => {
        if (utils.isFunction(errorCb))
        errorCb()
      },
      complete: () => {
        if (utils.isFunction(completeCb))
        completeCb();
      }
    })
  }

/**
 * 搜索图书
 */// 成功回调函数 successCb
function requestSearchBook(data,successCb,errorCb,completeCb){
  request(api.API_BOOK_SEARCH,data,successCb,errorCb,completeCb)
}
/**
 * 获取图书详细信息
 */
function requestBookDetail(id, data, successCb, errorCb, completeCb){
    //wx.request
  request(api.API_BOOK_DETAIL.replace(':id',id), data, successCb, errorCb, completeCb)
}

 export default{
    requestSearchBook,
    requestBookDetail
}