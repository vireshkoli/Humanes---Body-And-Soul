import React from "react";
import "./TrainersContainer.css";
import Trainercard from "../Trainer Cards/Trainercard";

function TrainersContainer(props) {
  return (
    <>
      <div className="trainerscontainer">
        <h2 className="cattitle floattitle">{props.trainerscontainertitle}</h2>
        <div className="catdesc fadeup">
          <h4>{props.trainerscontainerdesc}</h4>
        </div>
      </div>
      <div className="gymcards">
        {(props.trainersdata).map((item) => (<Trainercard {...item}/>))}
      </div>
    </>
  );
}

export default TrainersContainer;