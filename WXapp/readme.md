- 小程序
内嵌在微信超级App里，是WebView+微信一些App插件的混合
WebView App 内嵌页面技术 让App开发使用上Web技术，比Android/IOS 更快
缺点是性能慢
在拍照，tabbar，navigationbar 等一些关键的地方又能调用原生微信里的原生组件，提升性能
WXML 没有div view
WXSS 使用弹性布局
js文件 MVMM

- 架构
 小程序的架构是极其简单的，
 app.js 入口文件
 app.json 项目配置文件 pages 找到所有的页面
 1. 注册所有文件
 2. window 设置 App 名字， navigationBar 背景色 文字色
 3. 如果App需要底栏 设置一个tabbar
 pages 小程序有页面组成 简单？
  主要的代码都在这里
  1. wxml 写结构
  2. wxss 样式
  3. js 写逻辑
  4. json 文件 页面级别

  - 组件
  小程序提供了很多内置功能组件
  swiper 声明式组件  和html标签一样    但html标签功能贫瘠
  组件 集合了很多标签及功能 /*开发组件
   swiper>swiper-item  天生可以滑动的组件
   indicator-dots="{{true}}" 
   {{js 区链}}叫模板符号 


