// import React, { Component } from 'react';
// import './modal.css';

// class Modal extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       visible: true
//     }
//   }
//   // 为什么一定要生命周期。因为MVVM的本质就是setState。props传参改变。本地setState是没用的/
//   // MVVM 由外界的改变带动内部的改变。
//   componentWillReceiveProps(){
//     console.log("")
//     this.setState({
//       visible:this.props.visible
//     });
//   }
//   //防止对此渲染。
//   shouldComponentUpdate (nextProps) {
//     return false;
//     return true;
//   }
//   componentDidMount(){
//     this.setState({
//       visible:this.props.visible
//     })
//   }
//   render () {
//     const { visible } = this.state;
//     const { title, children } = this.props
//     return visible && <div className="modal-wrapper">
//       <div className="modal">
//         <div className="modal-title">{title}</div>
//         <div className="modal-content">{children}</div>
//         <div className="modal-operator">
//           <button onClick={this.confirm} className="modal-operator-close">取消</button>
//           <button onClick={this.confirm} className="modal-operator-confirm">确认</button>
//         </div>
//       </div>
//       <div className="mask"
//       onClick={this.maskClick}></div>
//     </div>
//   }
//   confirm=()=>{
//     const {confirm} = this.props;
//     confirm && confirm();
//     this.setState({
//       visible:false
//     });
//   }
//   closeModal = () =>{
//     const {onClose} = this.props;
//     onClose && onClose();
//     this.setState({
//       visible:false
//     });    
//   }
//   maskClick = () => {
//     console.log('我点击了蒙层');
//     this.setState({
//       visible: false
//     })
//   }
// }
// export default Modal;

import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
    constructor(props){
        super(props)
        this.state={
            visible:true
        }
    }
  render () {
      const { visible }=this.state
      const { title ,children}=this.props;
      return visible && 
           <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-title">{title}</div>
              <div className="modal-content">{children}</div>
                <div className="modal-operator">
                  <button 
                  onClick={this.closeModal}
                  className="modal-operator-close">取消</button>
                  <button 
                  onClick={this.confirm}
                  className="modal-operator-confirm">确认</button>
                </div>
              </div>
            <div className="mask" onClick={this.maskClick}></div>
      </div>
  }
  closeModal=()=>{
      const { onClose}=this.props.onClose;
      onClose&&onClose();
    this.setState({
        visible:false
    })
  }
  confirm=()=>{
      const { confirm }=this.props;
      confirm&&confirm();
    this.setState({
        visible:false
    })
  }
  maskClick=()=>{
      this.setState({
          visible:false
      })
  }
  componentWillReceiveProps(props){
     console.log("mvvm 关注state  随时接受props的改变");
      this.setState({
        visible:this.props.visible
    });
  }
  componentDidMount(){
    console.log("mvvm 关注state  随时接受props的改变 mount");
  }
}
export default Modal;
