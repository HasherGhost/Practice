import React from 'react'

import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {
  return (
    <div className='container'>

        <div className='header'>
            <div className="text">Sign up</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">

            <div className="input">
                <img src={user_icon} alt="" width="22"/> 
                <input type="text" placeholder='Name'/>
            </div>

            <div className="input">
                <img src={email_icon} alt="" width="22"/> 
                <input type="email" placeholder='E-mail'/>
            </div>

            <div className="input">
                <img src={password_icon} alt="" width = "22"/> 
                <input type="password" placeholder='password'/>
            </div>

        </div>

        <div className="forgot-password">Lost Password? <span>Click Here</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  );
};
