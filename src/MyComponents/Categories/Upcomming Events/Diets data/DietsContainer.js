import React from 'react'
import "./DietsContainer.css"
import DietCard from "../Diets/DietCard"

function DietsContainer(props) {
  return (
    <div className="meals">
        {(props.dietsdata).map((mealitem) => (
            <DietCard {...mealitem}/>
        ))}
    </div>
  )
}

export default DietsContainer