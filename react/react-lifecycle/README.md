生命周期 
1. 组件也是有实例化的
Class mount JSX对象
constructor 本职state 声明，可以用于数据的准备或请求，传统的面向对象思想 【可以这样用 但是没有必要】
2. 围绕 mount=挂载 首要任务
 - componentWillMount()
    
 - 性能优化 用户体验需求，
    componentDidMount()
    请求数据 组件的基本ui 已经渲染（加速），MVVM setState 推迟异步执行的数据，
3. update
    componentWillUpdate
    componentDidUpdate

4. unmoun
    卸载

5. props
因为MVVM 数据流的流向，由外到内，来自于props更新，更加频繁。
React 性能优化的核心，拒绝不必要的更新
nextProps ，nextState , this.state ,this.props 新旧的比较
shouldComponentUpdate(){
    if(新旧比较){
        return false;
    }
    return true;
}
componentWillRecieveProps(nextProps) {
    <!-- 要更新吗？提前做好询问准备 -->
}

