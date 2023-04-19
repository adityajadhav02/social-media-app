import './signup.css'

const Signup = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SocialSphere</h3>
                <span className="loginDesc">Connect with friends around the world with SocialSphere</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' className='loginInput' />
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <input placeholder='Confirm Password' className='loginInput' />
                    <button className="loginBtn">Sign Up</button>
                    {/* <span className="loginForgot">Forgot Password</span> */}
                    <button className='loginRegisterBtn'>Login to your account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup