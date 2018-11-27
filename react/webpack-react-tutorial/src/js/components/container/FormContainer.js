
import React, { Component } from 'react';
import Input from "../presentational/Input";
class FormContainer extends Component {
    constructor(){
        super(); //调用父类的构造函数
        this.state = { //state 状态
            seo_title:'',
        }
        this.handleChange = this.handleChange.bind(this);/* *this默认指向input 当前对象。下次讲* */
    }
    //等待子组件来交流 父子传递的地方
    handleChange(event) {
        this.setState({
            [event.target.id]:event.target.value
        });
    }
    render() {
        // wxml render负责向外输出模板
        return(
            <form id='article-form'>
                <Input
                    text = "SEO title"
                    label = "SEO_title"
                    type = "text"
                    id = "seo_title"
                    value = {this.state.seo_title}
                    handleChange = {this.handleChange}
                    />
                    <div>
                        {this.state.seo_title}
                    </div>
            </form>
        );
    }
}

export default FormContainer;