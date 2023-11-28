import React from "react";
import "./Gymscard.css";
import down from "./down.png";
import left from "./left.png";
import right from "./right.png";
import phone from "./phone.png"
import { useState } from "react";

function Gymcard(props) {
  const [dropcontent, setdropcontent] = useState(false);
  const [gymindex, setgymindex] = useState(0);

  function dropbtn() {
    setdropcontent(!dropcontent);
  }

  function changegymimg() {
    if (gymindex < 2) {
      setgymindex((gymindex) => gymindex + 1);
    } else {
      setgymindex(0);
    }
  }

  let extended = "";
  if (dropcontent === true) {
    extended = (
      <div className="gymdropcontent">
        <p className="dropimagehead">{props.gymtitle}</p>
        <div className="gymimages">
          <div className="gymleft">
            <button onClick={changegymimg}>
              <img src={left} alt="" />
            </button>
          </div>
          <img src={props.gymdropimg[gymindex]} alt="" />
          <div className="gymright">
            <button onClick={changegymimg}>
              <img src={right} alt="" />
            </button>
          </div>
        </div>
        <div className="gymdropdesc">
          <p>
            <b>Address</b> : {props.gymaddress}
          </p>
          <p>
            <b>Our Services</b> : {props.gymservices}
          </p>
          <p>
            <b>Specifications</b> : {props.gymspecifications}
          </p>
          <p className="gymcardprice"><b>{props.gymprice}</b></p>
          <div className="gymcontact">
            <a className="enrollbtn" href="/">
              ENROLL NOW
            </a>
            <button><img src={phone} alt="" /></button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card gymdetailcard">
      <div className="gymdetailupper">
        <img src={props.gymlogo} className="card-img-top gymlogo" alt="cardimg" />
        <div className="card-body gymbody">
          <h5 className="card-title">{props.gymtitle}</h5>
          <p className="card-text">{props.gymdescription}</p>
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
