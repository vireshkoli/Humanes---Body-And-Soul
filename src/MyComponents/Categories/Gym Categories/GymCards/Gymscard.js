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
      <div className="gymdropcontent">
        <img src={props.dropimg} alt="" />
        <div className="gymdropdesc">
          <p>
            <b>Address</b> : {props.address}
          </p>
          <p>
            <b>Specifications</b> : {props.specifications}
          </p>
          <p className="gymcardprice"><b>{props.price}</b></p>
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
    <div className="card gymdetailcard">
      <div className="gymdetailupper">
        <img src={props.logo} className="card-img-top" alt="cardimg" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
      <hr className="gymcardseparator"/>
      <button onClick={dropbtn} className="gymdownbtn">
        <img src={down} alt="gymdownbtn" />
      </button>
      {extended}
    </div>
  );
}

export default Gymcard;
