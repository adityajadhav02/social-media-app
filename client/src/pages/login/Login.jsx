import './login.css'
import { useRef } from 'react'

const Login = () => {
    const email = useRef();
    const password = useRef();

    const handleClick = (e) =>{
         console.log(email.current.value);
        e.preventDefault();
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
                    <input placeholder='Email' type="email" required className='loginInput' ref={email} />
                    <input placeholder='Password' required type='password' className='loginInput' ref={password} minLength="6"/>
                    <button className="loginBtn">Log In</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className='loginRegisterBtn'>Create a new account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login