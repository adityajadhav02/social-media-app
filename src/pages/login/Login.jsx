import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SocialSphere</h3>
                <span className="loginDesc">Connect with friends around the world with SocialSphere</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <button className="loginBtn">Log In</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className='loginRegisterBtn'>Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login