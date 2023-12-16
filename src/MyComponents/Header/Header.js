import React from "react";
import "./Header.css";
import humaneslogo from "./humaneslogo.png";
import profile from "./profile.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand text-white fs-2" href="/">
          <img className="humaneslogo float" src={humaneslogo} alt="Humanes" />
          HUMANES
        </a>
        <div className="navside">
          <a className="profile" href="/profile">
            <img src={profile} alt="profile" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 end-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
            <li className="loginsignup">
              <a className="nav-link" href="/loginsignup">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
