1. 
1vw等于视口宽度（viewport width）的百分之一，也就是说100vw就是视口的宽度。同理，1vh等于视30px改成5vw，意思就是窗口宽度的5%，同理10vw。
2. 专业的界面表达就是最佳的变现商业逻辑

wx 栅格系统
.col- 10vw
rem html 20vw  1rem = 1/5 20%
body  font-size 继承
设计稿 750px 1rem = 20 vm = 750/5=150
px2rem

1rem = 10px
1em = 10rem


1.PX实际上就是像素，用PX设置字体大小时，比较稳定和精确。但是这种方法存在一个问题，当用户在浏览器中浏览我们制作的Web页面时，如果改变了浏览器的缩放，这时会使用我们的Web页面布局被打破。这样对于那些关心自己网站可用性的用户来说，就是一个大问题了。因此，这时就提出了使用“em”来定义Web页面的字体。

2.EM就是根据基准来缩放字体的大小。EM实质是一个相对值，而非具体的数值。这种技术需要一个参考点，一般都是以<body>的“font-size”为基准。另外，em是相对于父元素的属性而计算的，如果想计算px和em之间的换算，输入数据就可以px和em相互计算。

3.EM是相对于其父元素来设置字体大小的，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而Rem是相对于根元素<html>，这样就意味着，我们只需要在根元素确定一个参考值。