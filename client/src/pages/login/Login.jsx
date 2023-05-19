import './login.css'
import { useContext, useRef, useEffect } from 'react'
import { loginCall } from '../../apiCalls';
import {AuthContext} from '../../context/AuthContext'
import {CircularProgress} from '@mui/material'
import { redirect } from 'react-router-dom';

const Login = () => {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) =>{
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    };

    useEffect(() => {
        if (user) {
          console.log('User is logged in');
          redirect("/signup");
        }
      }, [user]);

    console.log(user); 
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SocialSphere</h3>
                <span className="loginDesc">Connect with friends around the world with SocialSphere</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder='Email' type="email" required className='loginInput' ref={email} />
                    <input placeholder='Password' required type='password' className='loginInput' ref={password} minLength="6"/>
                    <button className="loginBtn" disabled={isFetching}> {isFetching ? 
                    <CircularProgress color="inherit" size={20} />: "Log In"}</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className='loginRegisterBtn'>
                    {isFetching ? 
                    <CircularProgress color="inherit" size={20} />: "Create a new account"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login