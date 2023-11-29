import React from "react";
import "./GymsContainer.css";
import Gymscard from "../GymCards/Gymscard";

function GymsContainer(props) {
  return (
    <>
      <div className="gymscontainer">
        <h2 className="cattitle floattitle">{props.gymscontainertitle}</h2>
        <div className="catdesc fadeup">
          <h4>{props.gymscontainerdesctitle}</h4>
          <p>{props.gymscontainerdesc}</p>
        </div>
      </div>
      <div className="gymcards" data-aos="fade-left" data-aos-duration="1000">
        {(props.gymsdata).map((item) => (<Gymscard key={item.title} {...item} />))}
      </div>
    </>
  );
}

export default GymsContainer;
