import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import {auth, provider} from './firebase'
function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((err) => alert(err.message));
    }
    return (
        <div className="login">
            <div className='login__logo'>
                <img
                src="https://iphonewired.com/wp-content/uploads/2020/05/Mac-message-app-will-change-to-Catalyst-version-soon.png"
                alt=""
                />
            </div>
            <Button onClick={signIn}>SIGN IN</Button>
        </div>
    )
}

export default Login
