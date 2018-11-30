JSX React 是模板的语法
Component render()
函数式组件 return()
template跟vue 不一样 ，在JS里面，JSX babel

1. JSX是一切组建的基础，函数式组件，以返回JSX 为目标
2. JSX真的就是JS，可以执行一切的JS
3. React JSX React.createElement() 更优雅的表达可读性。


JSX 用来描述UI信息，React.createElement() 更能表达这点

不管是小程序 vue 还是react 都是MVVM 模板 数据绑定的{} {{}}
JSX 不支持wx:for 还好他的纯JS的，可以自己写逻辑 灵活，
{
    <ul>
    {
        users.map((user,index)=><li key={index}>{user.name}</li>)
    }
    </ul>
}