import React from 'react';
import LoginForm from './forms/LoginForm';
import {user} from '../services/userService';
import {loginUser} from '../redux/userReducer';
import {connect} from 'react-redux';


function Login(props) {

    const login_user = (username, password, setError) => {
        user.LOGIN(username, password)
            .then(
                (res) => {
                    if (res.status === 'Success') {
                        props.dispatch(loginUser(res.user.username, res.user.password))
                    } else {
                        setError('login', 'failed', res.message)
                    }
                }
            )
    };


    return (
        <>  
            <h3>Log In to your account</h3>
            <LoginForm action={login_user} />
            <a href="/signup">Don't have an account? Signup here</a>
        </>
    )
}



export default connect()(Login);