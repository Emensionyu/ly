- window.onload 事件会在页面或图像加载完成后立即触发（即所有元素的资源都下载完毕）。
如果页面上有许多图片、音乐或falsh，onload事件会迟迟无法触发。
- DOM Ready事件. 此事件在DOM文档结构准备完毕后触发, 即在资源加载前触发


- 性能优化
    script 标签具有阻塞性，与src 下载代码，或行内的js
    并执行 不要放头部
    页面的显示，要以专业的painting来绘制 排列 重绘重排  
    （可以看一下小姚的文章）
    生命周期 window.onload document. DoMContentLoaded

    js 开始 不要阻止dom的绘制  但是也不要等到 window onload 
    DoMContentLoaded dom ready  img

- $(callback) 
jquery $ 第一种使用用途是dom ready 事件
<!-- $(function() {}) 是$(document).ready(function()的简写。
DOM加载完毕之后执行。 -->
$(function(){
    //js here
})
$(selector) 用于选择元素
动态页面
可以不用等数据取出来， 先显示页面， 再去取数据， 快的多