import React from "react";
import "./GymsContainer.css";
import Gymscard from "../GymCards/Gymscard";

function GymsContainer(props) {
  return (
    <>
      <div className="gymscontainer">
        {props.gymscontainertitle}
      </div>
      <div className="gymcards">
        {(props.gymsdata).map((item) => (<Gymscard key={item.title} {...item} />))}
      </div>
    </>
  );
}

export default GymsContainer;
