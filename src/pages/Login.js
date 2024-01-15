import React from 'react'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import AuthDetails from '../components/AuthDetails';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-container">
    <div className='login-content'>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
    </div>
  )
}

export default Login
