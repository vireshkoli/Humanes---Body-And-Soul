import React from "react";
import gym1 from "./gym1.jpg"
import gym2 from "./gym2.jpg"
import gym3 from "./gym3.jpg"
import "./Slider.css";

function Slider() {
  return (
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
        <div className="carousel-item active" data-bs-interval="8000">
          <img src={gym1} className="d-block w-100" alt="gym1" />
          <div className="carousel-caption caption1 carouselcap">
            <h1>HUMANES - BODY & SOUL</h1>
            <h4>Feed Your Strength !</h4>
            <a href="/" className="btn btn-outline-light btn-sm"><b>LEARN MORE</b></a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="8000">
        <img src={gym2} className="d-block w-100" alt="gym2" />
          <div className="carousel-caption caption2 carouselcap">
          <h1>We Believe You Can</h1>
            <h4>Fitness Plans, Gym Memberships, Qualified Trainers, </h4>
            <h4>Diet Categories, Supplements And Many More !</h4>
            <a href="/" className="btn btn-outline-light btn-md"><b>GET STARTED</b></a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="8000">
        <img src={gym3} className="d-block w-100" alt="gym3" />
          <div className="carousel-caption caption3 carouselcap">
          <h1>Premium Membership Programes</h1>
            <h4>Start Your Journey Today !</h4>
            <a href="/" className="btn btn-outline-light btn-md"><b>LEARN MORE</b></a>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
