import React from 'react';
import { connect } from 'react-redux'
import { loginApi } from '../../Redux/action'


const Login = (props) => {

    const formHandler = (event) => {
        event.preventDefault();
        if(event.target.password.value == 'password') {
            props.loginapi(true);
            props.history.push('/')
        }
    }
 

    return(
        <div class="container mt-5 mb-5">
        <div class="row justify-content-center align-items-center">
            <div class="col-4">
                <div class="card">
                <div class="card-body">
                   <form onSubmit={(e) => {formHandler(e)}} autocomplete="off">
                            <div class="form-group">
                            <label>Usename</label>
                                <input type="text" class="form-control" name="username" />
                            </div>
                            <div class="form-group">
                            <label>Password</label>
                                <input type="password" class="form-control" name="password" />
                            </div>
                            <button type="submit" class="btn btn-primary">login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loginapi: (isAuthenticated) => dispatch(loginApi(isAuthenticated))
})

export default connect(null, mapDispatchToProps)(Login);