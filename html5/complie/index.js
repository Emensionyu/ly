const html =`
<view>
<text>{{username}}</text>
</view>
`;

let obj={ username: '唐唐'}
// {{}}
// 在模板中，查找{{key}}
// 替换成 username 变量的值 replace
function compile(html) {
    // 正则表达式
    // 找到key
    // replace正则表达式 变量的value
    if(/\{\{(.*)\}\}/.test(html)){
        let key = RegExp.$1;
        html= html.replace(/\{\{(.*)\}\}/gm,obj[key]);
        return html;
    }
    // test=>$1=>Key(username)=>replace{{.*}}=>key的值
    

}
const compiledHTML = compile(html);
console.log(compiledHTML);