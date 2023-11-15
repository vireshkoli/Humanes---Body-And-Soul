import React from "react";
import "./Personal.css";
import Trainercard from "../Trainer Cards/Trainercard";
import { PERSONALDATA } from "./Data";

function Personal() {
  return (
    <>
      <div className="personalcontainer">
        Hi I Am Personal Trainers
      </div>
      <div className="personalgymcards">
        {PERSONALDATA.map((item) => (<Trainercard {...item}/>))}
      </div>
    </>
  );
}

export default Personal;