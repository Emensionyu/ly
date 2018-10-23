clientHeight ,offsetHeight,style.height,scrollHeight有区别与联系
style.height 包括 元素的滚动条,不包括边框
clientHeight 不包括元素的滚动条和边框,只有在没有元素的滚动条的情况下,style.height相等于clientHeight
offsetHeight 包括元素的滚动条和边框,只有在没有元素的滚动条和边框的情况下,offsetHeight==style.height==clientHeight
scrollHeight offsetHeight+scrollTop,只有在没有元素的滚动条和边框和滚动时的情况下,offsetHeight==style.height==clientHeight==,offsetHeight==style.height==scrollHeight
 公式是:
 style.height=clientHeight+滚动条宽度;
 offsetHeight=style.height+borderTop+borderBottom;
 scrollHeight=offsetHeight+scrollTop;

同理: clientWidth,offsetWidthstyle.width,scrollWidth
演示时营造不同的环境测试(改变eyejs元素的样式)
<div id="eyejs" style="border: solid 10px red;width:100px;height:100px;overflow:scroll;">
<div style="height:200px;"></div>
</div>
<input type="button" onclick="alert(document.getElementById('eyejs').clientHeight)" value="点击clientHeight" />
<input type="button" onclick="alert(document.getElementById('eyejs').style.height)" value="点击style.height" />
<input type="button" onclick="alert(document.getElementById('eyejs').offsetHeight)" value="点击offsetHeight" />
<input type="button" onclick="alert(document.getElementById('eyejs').scrollHeight)" value="点击scrollHeight" />