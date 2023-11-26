import React from "react";
import "./DietCard.css";

function VegDiet(props) {
  return (
    <div className="card mb-3 dietcard">
        <div className="card-body mealbody1">
          <h5 className="card-title">{props.mealcalories}</h5>
          <p className="card-text">{props.mealcarbs}</p>
          <p className="card-text">{props.mealprotein}</p>
          <p className="card-text">{props.mealfats}</p>
          <p className="card-text">{props.mealfibre}</p>
        </div>
        <div className="card-body mealbody2">
          <h4 className="card-title"><b>{props.mealtype}</b></h4>
          <p className="card-text">{props.mealname}</p>
        </div>
        <div className="mealimg">
          <img
            src={props.mealimg}
            className="rounded-start"
            alt="meal"
          />
        </div>
      </div>
  );
}

export default VegDiet;
