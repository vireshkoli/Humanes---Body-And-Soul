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

  let profileimagecontent = (
    <div className="profileimage">
      <img src={profile} alt="" />
      <label for="profileimg">
        {action === "Sign Up Gym" ? "Upload Logo" : "Upload Profile"}
      </label>
      <input
        type="file"
        id="profileimg"
        accept="image/png, image/jpeg"
        style={{
          display: "none",
        }}
      />
    </div>
  );

  let signuptrainercontent = (
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
      <div className="uploadfiles">
        <img src={files} alt="" />
        <div>
          <label for="transformationfiles">Upload Transformations</label>
          <input
            type="file"
            id="transformationfiles"
            name="files[]"
            multiple
            accept="image/png, image/jpeg"
            style={{
              display: "none",
            }}
          />
        </div>
      </div>
    </>
  );

  let signupgymcontent = (
    <>
      <div className="input">
        <img src={person} alt="" />
        <input type="text" placeholder="Gym Name" />
      </div>
      <div className="input gymheadline">
        <img src={person} alt="" />
        <textarea
          placeholder="Write Your Gym Headline 0 - 50 Alphabets"
          name="aboutgym"
          id="aboutgym"
          cols="30"
          rows="10"
          maxLength={50}
          minLength={10}
        ></textarea>
      </div>
      <div className="input gymaddress">
        <img src={person} alt="" />
        <textarea
          placeholder="Gym Address"
          name="aboutgym"
          id="aboutgym"
          cols="30"
          rows="10"
          maxLength={100}
          minLength={10}
        ></textarea>
      </div>
      <div className="input">
        <img src={person} alt="" />
        <input type="text" placeholder="Enter Gym Services" />
      </div>
      <div className="input gymdesc">
        <img src={person} alt="" />
        <textarea
          placeholder="Enter Gym Description"
          name="aboutgym"
          id="aboutgym"
          cols="30"
          rows="10"
          maxLength={500}
          minLength={10}
        ></textarea>
      </div>
      <div className="input">
        <img src={person} alt="" />
        <input type="number" placeholder="Gym Membership Amount:" />
      </div>
      <div className="uploadfiles">
        <img src={files} alt="" />
        <div>
          <label for="gymimages">Upload Gym Images</label>
          <input
            type="file"
            id="gymimages"
            name="files[]"
            multiple
            accept="image/png, image/jpeg"
            style={{
              display: "none",
            }}
          />
          <span>(Aspect Ratio : 16/9)</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="loginsignupcontainer">
      <div className="loginsignupheader inputslideright">
        <h1>{action}</h1>
        <div className="underline"></div>
      </div>

      <div className="loginsignupinputs inputslideright">
        {action === "Sign Up" ||
        action === "Sign Up Trainer" ||
        action === "Sign Up Gym" ? (
          <>{profileimagecontent}</>
        ) : undefined}

        {action === "Login" || action === "Sign Up Gym" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={person} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        {action === "Login" ||
        action === "Sign Up" ||
        action === "Sign Up Trainer" ? (
          <>
            <div className="input">
              <img src={email} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={password} alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </>
        ) : undefined}

        {action === "Sign Up Trainer" ? <>{signuptrainercontent}</> : undefined}

        {action === "Sign Up Gym" ? <>{signupgymcontent}</> : undefined}

        {action === "Sign Up" ||
        action === "Sign Up Trainer" ||
        action === "Sign Up Gym" ? (
          <div className="signuptype">
            <div className="signuptext" id="loginhere">
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
            {action === "Sign Up" ? (
              <div className="signuptext">
                Are You A Gym Owner ?{" "}
                <span onClick={() => setAction("Sign Up Gym")}>
                  Sign Up As A Gym
                </span>
              </div>
            ) : undefined}
          </div>
        ) : undefined}

        {action === "Login" ? (
          <div className="forgot-password">
            Lost Password ? <span>Click Here!</span>
          </div>
        ) : undefined}

        <div className="submitcontainer">
          {action === "Sign Up" ||
          action === "Sign Up Trainer" ||
          action === "Sign Up Gym" ? (
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
