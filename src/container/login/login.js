import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginApi } from '../../Redux/action'

import Input from '../../component/input/input';


class Login extends Component {

    state = {
        loginform:{
            username:{
                name:'username',
                label:'Username',
                type:'text',
                wrong:false,
                isvalid:false,
                touched:false
            },
            password:{
                name:'password',
                label:'Password',
                type:'password',
                wrong:false,
                isvalid:false,
                touched:false
            }
        },
        formvalid:false
    }

     formHandler = (event) => {
        event.preventDefault();
        
        // if(event.target.password.value == 'password' && event.target.username.value == 'admin') {
            let data = {
                email: event.target.username.value,
                password: event.target.password.value
            }
             if(this.state.formvalid) {
                this.props.loginapi(true, data);
                this.props.history.push('/')
             }
                
            
         
        // }
       // let loginform = this.state.loginform;

        // if(event.target.password.value != 'password') {
        //     loginform['password'].wrong = true;
        //     loginform['password'].isvalid = true;
        //     this.setState({loginform:loginform})
        // }
        // if(event.target.username.value != 'admin') {
        //     loginform['username'].wrong = true;
        //     loginform['username'].isvalid = true;
        //     this.setState({loginform:loginform})
        // }
       
    }

    isValidForm = () => {
        let loginform = this.state.loginform;
        let isvalid  = true;
        for(let item in loginform) {
         isvalid = loginform[item].isvalid && isvalid;
        }
        this.setState({formvalid:isvalid})
    }

    changeHandler = (event) => {
        let loginform = this.state.loginform;
      if(!event.target.value.toString()){
        loginform[event.target.name].isvalid = false;
        this.setState({loginform:loginform})
      }
      else{
        loginform[event.target.name].isvalid = true;
        this.setState({loginform:loginform})
        
      }
      loginform[event.target.name].touched = true;
      this.setState({loginform:loginform})
     if(loginform[event.target.name].touched) {
        this.isValidForm();
     }
    }
 
render(){
    let loginGroup = Object.keys(this.state.loginform).map(element => {
        return ( <Input key = {element} type = {this.state.loginform[element].type} label = {this.state.loginform[element].label} name ={this.state.loginform[element].name}  
                 change = {(e) => {this.changeHandler(e)}}    
                 wrong = {this.state.loginform[element].wrong} 
                 isvalid = {this.state.loginform[element].isvalid}
                 touched = {this.state.loginform[element].touched}/>)
    })
    return(
        <div class="container mt-5 mb-5">
        <div class="row justify-content-center align-items-center">
            <div class="col-4">
                <div class="card">
                <div class="card-body">
                   <form onSubmit={(e) => {this.formHandler(e)}} autocomplete="off">
                        {loginGroup}
                            <button type="submit" class="btn btn-primary">login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
}

const mapDispatchToProps = dispatch => ({
    loginapi: (isAuthenticated, data) => dispatch(loginApi(isAuthenticated, data))
})

export default connect(null, mapDispatchToProps)(Login);