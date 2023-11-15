import React from "react";
import "./Standard.css";
import Gymscard from "../GymCards/Gymscard";
import { STDGYMDATA } from "./Data";

function Standard() {
  return (
    <>
      <div className="stdcontainer">
        Hi I Am Standard Gym
      </div>
      <div className="stdgymcards">
        {STDGYMDATA.map((item) => (<Gymscard key={item.title} {...item} />))}
      </div>
    </>
  );
}

export default Standard;
