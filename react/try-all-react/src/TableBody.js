
import React, { Component } from 'react';

const TableBody = (props)=>{
//    console.log(props);
   //函数式组件,纯函数
   const rows = props.characterData.map((row,index)=>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><a className="btn btn-primary" herf="javascript:;" 
                onClick={()=>props.removeCharacter(index)}></a>删除</td>
            </tr>
            )
        });
        return <tbody>{rows}</tbody>;
}
export default TableBody