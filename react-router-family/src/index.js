import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link,Redirect,withRouter} from 'react-router-dom';
// 鉴权
const fakeAuth = {
    isAuthenticated:false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb,1000);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb,1000);
    }
}
function AuthExample(){
    return(
        <Router>
            <div>
                <AuthButton />
                {/* <Route path="/" component={AuthButton}  /> */}
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="protected">Protected Page</Link>
                    </li>
                </ul>
                <Route  path="/public" component={Public}/>
                <PrivateRoute path="/protected" component={Protected}/>
                <Route  path="/login" component={Login}/>
            </div>
        </Router>
    );
}
// 三元运算符？
const AuthButton = withRouter(({history})=>{
    return fakeAuth.isAuthenticated
    ?(<p>Welcome! 
        <button onClick = { () => { fakeAuth.signout( () => {
        history.push("/")
    }); } }>signout</button>
    </p>)
    :(<p>you are not logined .</p>)
})

// function AuthButton({history}) {
//     return fakeAuth.isAuthenticated
//     ?(<p>Welcome! <button onClick = { () => { fakeAuth.signout( () => {
//         // Redirect?   no 用于jsx在render里面的输出
//         // js 并非 jsx 输出
//         // history.push('/')  不是单纯的原生API 所以加参数history
//         history.push("/")
//     }); } }>signout</button></p>)
//     :(<p>you are not logined .</p>)
// }
function Public(){
    return <div>Public</div>
}
function Protected(){
    return <div>Protected</div>
}
//这个...rest 收起
// PrivateRoute 自定义组件
function PrivateRoute ({component:Component,...rest}) {  
    return(
    <Route 
        {...rest}
        render = { 
            props => 
            fakeAuth.isAuthenticated ? (<Component  />):(<Redirect to={
                {pathname: "/login",state:{from:props.location}
            }}/>)
        }/>
    ); //第二个...rest展开
}
class Login extends React.Component {
    state = {
        redirectToReferror:false
    }
    login =  () => {
        fakeAuth.authenticate(() => {
            this.setState({
                redirectToReferror:true
            })
        })
    }
    render() {
        let { from } = this.props.location.state || {from:{pathname:"/"}};
        let redirectToReferror = this.state.redirectToReferror;
        if(redirectToReferror) return <Redirect to = {from} />
        return(
            <div>

                <p>you must log in to view the page at {from.pathname}</p>
                <button onClick={this.login} >Login</button>
            </div>
        );
    }
}

ReactDOM.render(<AuthExample/>, document.getElementById('root'));

