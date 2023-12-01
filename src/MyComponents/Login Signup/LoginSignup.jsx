import React from "react";
import { useState } from "react";
import "./LoginSignup.css";

import person from "./person.png";
import email from "./email.png";
import password from "./password.png";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="loginsignupcontainer">
      <div className="loginsignupheader inputslideright">
        <h1>{action}</h1>
        <div className="underline"></div>
      </div>
      <div className="loginsignupinputs inputslideright">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={person} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder="Password" />
        </div>
        {action === "Sign Up" ? (
          <div className="logintext">
            Already Have An Account?{" "}
            <span onClick={() => setAction("Login")}>Login Here!</span>
          </div>
        ) : (
          <div className="forgot-password">
            Lost Password ? <span>Click Here!</span>
          </div>
        )}
        <div className="submitcontainer">
          {/* For Sign Up And Login Buttons To be together */}
          {/* <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div> */}
          
          {action === "Sign Up" ? (
            <div className="submit">Sign Up</div>
          ) : (
            <>
              <div className="submit">Login</div>
              <div
                className="createaccount"
                onClick={() => setAction("Sign Up")}
              >
                Create New Account !
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
