
// // redux 解决的是多（层次） 组件共事状态
// const  appState = {
//     head:{
//         text:"我是头部",
//         color:'red'

//     },
//     body:{
//         text:'我是body',
//         color:'green'
//     }
// }
// // 状态的可读以及状态的不可写？
// // 写 规则  何时写 如何写。dispacth只是一个代号
// function dispatch(state,action){
//     switch(action.type) {
//         case'HEAD_COLOR'://这个时候写
//             state.head.color = action.color//这样写
//         break;
//         case'BODY_TEXT':
//             state.body.text = action.text
//         break;
//         default:
//         break;
//     }
// }

// // 为什么直接用state 而不分用 state.head state.body.?
// // 因为没必要，是共用。 
// // 如果组件只是用自己的状态，不需要redux
// // head 会用body 在body 会用head
// function renderHead(state){
//     const head = document.getElementById('head');
//     head.innerText = state.head.text;
//     head.style.color = state.head.color
//     // 隐患？所有的状态都在一棵树上，方便修改全局状态。但是修改某组件状态回牵一发而动全身。
//     // getState 读随意，修改状态的值一定要按规矩办。只有action才能修改状态，
//     // action 对状态写，是所有组件都遵守的约定 dispatch
//     // state.body.text = '我是经过head修改后的body'  //身子已修改。
//     dispatch(state,{type:'BODY_TEXT',text:'我是head 经过调用dispatch 修改后的body'});
// }

// function renderBody(state){
//     const body = document.getElementById('body');
//     body.innerText = state.body.text;
//     body.style.color = state.body.color
//     // state.head.text = '我是是是。。。。'  //修改不了头部。
// }


// function renderApp(state){
//     renderHead(state);
//     renderBody(state);
// }

// // UI render?

// renderApp(appState); //负责整体渲染

import {state } from './redux/state.js'
import {storeChange} from './redux/storeChange.js'
import {createStore} from './redux/createStore.js'

const {store, dispatch} = createStore(state,storeChange) ;
function renderHead(state){
    const head = document.getElementById('head');
    head.innerText = state.text;
    head.style.color = state.color;
}
function renderBody(state){
    const body = document.getElementById('body');
    body.innerText = state.text;
    body.style.color = state.color
}
function renderApp(store) {
    renderHead(store.head);
    renderBody(store.body);
}
renderApp(store);
dispatch({
    type:"BODY_TEXT",text:'我是调用dispatch修改的body'
});
// console.log(store);
renderApp(store);