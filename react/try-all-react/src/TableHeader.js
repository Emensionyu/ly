
import React, { Component } from 'react';
// 箭头函数不能用this
const TableHeader = ()=>{
    return (
        <thead>
            <tr>
                <th>name</th>
                <th>job</th>
            </tr>
        </thead>
        );
}
export default TableHeader