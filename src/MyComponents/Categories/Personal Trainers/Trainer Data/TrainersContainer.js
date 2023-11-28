import React from "react";
import "./TrainersContainer.css";
import Trainercard from "../Trainer Cards/Trainercard";

function TrainersContainer(props) {
  return (
    <>
      <div className="trainerscontainer">
        {props.trainerscontainertitle}
      </div>
      <div className="gymcards">
        {(props.trainersdata).map((item) => (<Trainercard {...item}/>))}
      </div>
    </>
  );
}

export default TrainersContainer;