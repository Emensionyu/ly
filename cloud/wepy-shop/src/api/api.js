
// Application Interface
// Server Web Application 
// 前后端分离 接口 
import{
    wxRequest
} from "@/utils/wxRequest"
const apiMall = "https://sujiefs.com"
const getAdList = (params) => wxRequest(params,apiMall+"/api/adverts/list");

// wxRequest 会再()内调用 wx:request 请求函数后再返回到你的页面上？
// 为啥wexRequest 算一个api 因为他是由 promise封装的 实现了wx:request的原生调用
export default {
    getAdList
}