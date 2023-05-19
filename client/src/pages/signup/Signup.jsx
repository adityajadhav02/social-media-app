import './signup.css'
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();

    const navigate = useNavigate();

    const handleClick = async (e) =>{
        e.preventDefault();

        if(password.current.value !== passwordAgain.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        }
        else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            };
            
            try{
                await axios.post("/auth/register", user);
                navigate("/login");

            }catch(e){
                console.log(e);
            }
        }

    }
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SocialSphere</h3>
                <span className="loginDesc">Connect with friends around the world with SocialSphere</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder='Username' required ref={username} className='loginInput' />
                    <input placeholder='Email' required ref={email} className='loginInput' type="email"/>
                    <input placeholder='Password' required ref={password} className='loginInput' type="password" minLength="6"/>
                    <input placeholder='Confirm Password' required ref={passwordAgain} className='loginInput' type="password" />
                    <button className="loginBtn">Sign Up</button>
                    {/* <span className="loginForgot">Forgot Password</span> */}
                    <button className='loginRegisterBtn'>Login to your account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup