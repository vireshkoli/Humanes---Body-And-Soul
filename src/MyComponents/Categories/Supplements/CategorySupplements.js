import React from "react";
import "./CategorySupplements.css";
import supplementsslider1 from "./supplementsslider1.jpg";
import supplementsslider2 from "./supplementsslider2.jpg";
import supplementsslider3 from "./supplementsslider3.jpg";

import search from "./search.png";
import ProductCard from "./Products/ProductCard";
import { PRODUCTDATA } from "./Product Data/Data";

function CategorySupplements() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={supplementsslider1} className="d-block w-100" alt="..." />
            <div className="starterpack">
              <h2>STARTER PACK</h2>
              <button className="starterbuy">BUY NOW</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={supplementsslider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={supplementsslider3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="products">
        <div className="productheader">
          <h3>Our Products</h3>
          <form className="d-flex productsearch">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              <img src={search} alt="search" />
            </button>
          </form>
        </div>
        <div className="dropdown filter">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Product Filter
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Category
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Price
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Rating
              </a>
            </li>
          </ul>
        </div>
        <div className="productgrid">
          {PRODUCTDATA.map((productitem) => (
            <ProductCard {...productitem} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CategorySupplements;
