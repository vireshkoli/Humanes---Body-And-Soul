import React from 'react'
import "./LoginSignup"

import person from "./person.png"
import email from "./email.png"
import password from "./password.png"

function LoginSignup() {
  return (
    <div className="loginsignupcontainer">
      <div className="loginsignupheader">
        <h1>Sign Up</h1>
        <div className="underline"></div>
      </div>
      <div className="fieldinputs">
        <div className="input">
          <img src={person} alt="" />
          <input type="text" placeholder="Name"/>
        </div>
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup