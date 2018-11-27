// import react, { Component } from "react";
// import Input from "../presentational/Input";
// container method 生命周期 模板 样式 props 组件构成

// react 组件有多种写法 容器Component+表现箭头函数 (=>{} )
// props(外界传进来的数据) + render wxml 表现型组件
import React from 'react';
const Input = ({label,text,type,id,value,handleChange }) => (
    <div className='form-group'>
        <label htmlFor={label}> {text} </label>
        <input type={type} 
            className='form-control' 
            id={id} 
            value={value} 
            onChange={handleChange} 
            required
        />
    </div>
);

export default Input;