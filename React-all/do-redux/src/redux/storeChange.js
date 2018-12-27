// 所有修改

// 只负责state 的计算
export const storeChange = (state,action)=>{
    switch(action.type) {
        case'HEAD_COLOR'://这个时候写
            state.head.color = action.color//这样写
        break;
        case'BODY_TEXT':
            state.body.text = action.text
        break;
        default:
        break;
    }
}