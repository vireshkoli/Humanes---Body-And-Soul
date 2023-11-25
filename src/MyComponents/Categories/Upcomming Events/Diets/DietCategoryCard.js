import React from 'react'
import "./DietCategoryCard.css"

function DietCategoryCard(props) {
  return (
    <div className="card mb-3 dietcategorycard">
  <div className="row g-0">
    <div className="col-md-4 dietcategoryimg">
      <img src={props.categoryimg} className="" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.categorypath} class="btn btn-warning dietcategorybtn">EXPLORE</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default DietCategoryCard