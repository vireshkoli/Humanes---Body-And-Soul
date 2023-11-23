import React from "react";
import "./ProductCard.css";
import star from "./star.png"
import heart from "./heart.png"

function ProductCard(props) {
  return(
  <div className="card productcard">
    <img src={props.productimage} className="card-img-top productimage" alt="product" />
    <div className="card-body productcardbody">
        <p className="productcategory">{props.productcategory}</p>
        <h3>{props.producttitle}</h3>
        <div className="productrating">
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <p>{props.productrating}</p>
        </div>
        <h4><b>{props.productprice}</b></h4>
        <div className="likebtn">
            <button><img src={heart} alt="heart" /></button>
        </div>
    </div>
  </div>
  )
}

export default ProductCard;
