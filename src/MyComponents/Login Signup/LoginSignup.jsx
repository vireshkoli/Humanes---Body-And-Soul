import React from "react";
import { useState } from "react";
import "./LoginSignup.css";

import person from "./person.png";
import email from "./email.png";
import password from "./password.png";
import files from "./files.png";
import money from "./money.png";
import profile from "./profile.png";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="loginsignupcontainer">
      <div className="loginsignupheader inputslideright">
        <h1>{action}</h1>
        <div className="underline"></div>
      </div>
      <div className="loginsignupinputs inputslideright">
        <div className="profileimage">
          <img src={profile} alt="" />
          <label for="profileimg">Upload Profile</label>
          <input
            type="file"
            id="profileimg"
            accept="image/png, image/jpeg"
            style={{
              display : "none"
            }}
          />
        </div>
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
        {action === "Sign Up Trainer" ? (
          <>
            <div className="input aboutme">
              <img src={person} alt="" />
              <textarea
                placeholder="Write About Yourself For Trainer's Description"
                name="aboutme"
                id="aboutme"
                cols="30"
                rows="10"
                maxLength={500}
                minLength={10}
              ></textarea>
            </div>
            <div className="sessionamount">
              <img src={money} alt="" />
              <input type="number" placeholder="Enter Amount Per Session :" />
            </div>
            <div className="contactno">
              <img src={person} alt="" />
              <input type="tel" placeholder="Contact No." />
            </div>
            <div className="uploadtransformations">
              <img src={files} alt="" />
              <div className="uploadfiles">
                <label for="transformationfiles">Upload Transformations</label>
                <input
                  type="file"
                  id="transformationfiles"
                  name="files[]"
                  multiple
                  accept="image/png, image/jpeg"
                  style={{
                    display : "none"
                  }}
                />
              </div>
            </div>
          </>
        ) : undefined}

        {action === "Sign Up" || action === "Sign Up Trainer" ? (
          <>
            <div className="signuptext">
              Already Have An Account?{" "}
              <span onClick={() => setAction("Login")}>Login Here!</span>
            </div>
            {action === "Sign Up" ? (
              <div className="signuptext">
                Are You A Trainer ?{" "}
                <span onClick={() => setAction("Sign Up Trainer")}>
                  Sign Up As A Trainer
                </span>
              </div>
            ) : undefined}
          </>
        ) : undefined}
        {action === "Login" ? (
          <div className="forgot-password">
            Lost Password ? <span>Click Here!</span>
          </div>
        ) : undefined}
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

          {action === "Sign Up" || action === "Sign Up Trainer" ? (
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
