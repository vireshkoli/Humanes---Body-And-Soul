import React from "react";
import "./ProductCard.css";
import star from "./star.png"

function ProductCard(props) {
  return(
  <div className="card">
    <img src={props.productimage} className="card-img-top" alt="product" />
    <div className="card-body">
        <p>{props.productcategory}</p>
        <h3>{props.producttitle}</h3>
        <img src={productrating} alt="rating" />
        <h2>{props.productprice}</h2>
    </div>
  </div>
  )
}

export default ProductCard;
