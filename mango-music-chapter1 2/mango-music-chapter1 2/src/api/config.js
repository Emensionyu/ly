// 配置？
const URL = {
    carousel: "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
    /*最新专辑*/
    newalbum: "https://u.y.qq.com/cgi-bin/musicu.fcg"
}
const PARAM = {
    format:"jsonp", //跨域请求的json 就叫jsonp json with padding
    inCharset:"utf-8",
    outCharset:"utf-8",
    notice:0
}
const OPTION = {
    param:"jsonpCallback",
    prefix:"callback"
}
const CODE_SUCCESS = 0;
export {URL,CODE_SUCCESS,OPTION,PARAM};