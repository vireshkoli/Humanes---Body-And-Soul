import React from 'react'
import "./VegDiet.css"
import DietCard from "../Diets/DietCard"
import { VEGDIETDATA } from './Data'

function VegDiet() {
  return (
    <div className="meals">
        {VEGDIETDATA.map((mealitem) => (
            <DietCard {...mealitem}/>
        ))}
    </div>
  )
}

export default VegDiet