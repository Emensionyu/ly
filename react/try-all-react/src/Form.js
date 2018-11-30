import React, {Component} from 'react';
class Form extends Component{
    constructor(){
        super();
        // 子组件 state
        this.initialState = {
            name:"",
            job:""
        };
        this.state = this.initialState;
    }
    render() {
        const {name,job} = this.state;
        return(
            <form className="form-group">
                <div className="form-field">
                    <label htmlFor="">Name</label>
                    <input className="form-control" type="text" name="name" value={name} onChange={this.handleChange}/>        
                </div>
                <div className="form-field">

                    <label htmlFor="">job</label> 
                    <input className="form-control" type="text" name="job" value={job} onChange={this.handleChange}/>
                </div>
                <div className= "form-field">
                    <input  className="btn btn-primary" type="button" value="submit" onClick={()=>this.submitForm()}/>
                </div>
            </form>
        );
    }
    submitForm = ()=> {;
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    handleChange = event =>{
        const {name,value} = event.target;
        console.log(event.target)
        console.log(name,value);
        this.setState({
            [name]:value
        })
    }
}
export default Form;