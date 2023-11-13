import React from "react";
import "./Gymscard.css";
import down from "./down.png";
import { useState } from "react";

function Gymcard(props) {
  const [dropcontent, setdropcontent] = useState(false);
  function dropbtn() {
    setdropcontent(!dropcontent);
  }

  let extended = "";
  if (dropcontent === true) {
    extended = (
      <div className="dropcontent">
        <img src={props.dropimg} alt="" />
        <div className="dropdesc">
          <p>
            <b>Address</b> : {props.address}
          </p>
          <p>
            <b>Specifications</b> : {props.dropdown}
          </p>
          <div className="enroll">
            <a className="enrollbtn" href="/">
              ENROLL NOW
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card infocard">
      <div className="uppercard">
        <img src={props.logo} className="card-img-top" alt="cardimg" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-price">{props.price}</p>
        </div>
      </div>
      <hr className="cardseperator"/>
      <button onClick={dropbtn} className="downbtn">
        <img src={down} alt="downbtn" />
      </button>
      {extended}
    </div>
  );
}

export default Gymcard;
