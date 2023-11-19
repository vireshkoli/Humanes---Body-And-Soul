import React from "react";
import "./CategorySupplements.css"
import supplementsslider1 from "./supplementsslider1.jpg";
import supplementsslider2 from "./supplementsslider2.jpg";

import ProductCard from "./Products/ProductCard"

function CategorySupplements() {
  return (
    <>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={supplementsslider1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={supplementsslider2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={supplementsslider1} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="products">
        <div className="productheader">
          <h3>Our Products</h3>
          <div className="productgrid">
            <ProductCard/>
          </div>
        </div>
    </div>
    </>
  );
}

export default CategorySupplements;
