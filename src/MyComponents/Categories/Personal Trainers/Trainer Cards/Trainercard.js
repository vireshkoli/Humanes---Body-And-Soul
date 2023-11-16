import React from "react";
import "./Trainercard.css";
import down from "./down.png";
import phone from "./phone.png";
import play from "./play.png";
import left from "./left.png";
import right from "./right.png";
import cross from "./cross.png";
import { useState } from "react";

function Trainercard(props) {
  const [dropcontent, setdropcontent] = useState(false);
  const [transformindex, settransformindex] = useState(0);

  function dropbtn() {
    setdropcontent(!dropcontent);
  }
  function changetransform() {
    if (transformindex < 2) {
      settransformindex((transformindex) => transformindex + 1);
    } else {
      settransformindex(0);
    }
  }

  let extended = "";
  if (dropcontent === true) {
    extended = (
      <div className="trainerdropcontent">
        <p className="dropimagehead">Transformations</p>
        <div className="transformations">
          <div className="left">
            <button onClick={changetransform}>
              <img src={left} alt="" />
            </button>
          </div>
          <img src={props.trainerdropimg[transformindex]} alt="" />
          <div className="right">
            <button onClick={changetransform}>
              <img src={right} alt="" />
            </button>
          </div>
        </div>
        <div className="trainerdropdesc">
          <p>
            <b>{props.trainername}</b> : {props.trainerdetail}
          </p>
          <p>
            <b>Email</b> : {props.traineremail}
          </p>
          <p className="trainercardprice">
            <b>{props.cost}</b>
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

  let content = (
    <>
      <div className="trainerdetailupper">
        <div className="trainerimg">
          <img src={props.trainerimg} className="card-img-top" alt="cardimg" />
        </div>
        <div className="card-body trainerdetailbody">
          <h5 className="card-title">{props.trainername}</h5>
          <p className="card-text">{props.trainerdesc}</p>
          <div className="contact">
            <img className="phone" src={phone} alt="" />
            <button onClick={swapcontent}>
              <img className="intro" src={play} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const [cardcontent, setcardcontent] = useState(true);

  function swapcontent() {
    setcardcontent(!cardcontent);
  }
  if (cardcontent === false) {
    content = (
      <>
        <video className="trainerintro" controls autoPlay>
          <source src={props.trainerintro} type="video/mp4" />
        </video>
        <button onClick={swapcontent} className="cross"><img src={cross} alt="cross" /></button>
      </>
    );
  }

  return (
    <div className="card trainerdetailcard">
      {content}
      <hr className="trainercardseperator" />
      <button onClick={dropbtn} className="trainerdownbtn">
        <img src={down} alt="downbtn" />
      </button>
      {extended}
    </div>
  );
}

export default Trainercard;
