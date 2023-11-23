import React from "react";
import "./ProductCard.css";
import star from "./star.png"
<<<<<<< HEAD
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
=======

function ProductCard(props) {
  return(
  <div className="card">
    <img src={props.productimage} className="card-img-top" alt="product" />
    <div className="card-body">
        <p>{props.productcategory}</p>
        <h3>{props.producttitle}</h3>
        <img src={productrating} alt="rating" />
        <h2>{props.productprice}</h2>
>>>>>>> 0f79ae9579ec480a337068da5e634d3a090845f5
    </div>
  </div>
  )
}

export default ProductCard;
