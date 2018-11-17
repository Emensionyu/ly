1. wx.getSetting
用户授权范围里查询基本信息使用权利scope.userInfo
接着要做别的事情，高阶函数
success fail 


2. 
// -1表示未授权登录
// 高阶函数:参数部分可以是一个函数     scope是小程序运行获得用户信息的授权
// 获取用户许可范围，得到范围，该干嘛干嘛
// success type function fail失败仍然是函数function    
// es6
3. 未授权 就要授权 弹出授权询问框 分支一
已授权 分支二
 归并 去登录 this.getUserInfo