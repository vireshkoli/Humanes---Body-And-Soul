import React from "react";
import "./Category.css";

function Category(props) {
  return (
    <div className="card mb-3" data-aos="fade-left" data-aos-duration="1000">
      <div className="row g-0">
        <div className="col-md-4 cardimg">
          <img src={props.cardimg} className="img-fluid" alt="cardimg"/>
        </div>
        <div className="col-md-8 cardcontent">
          <div className="card-body">
            <h5 className="card-title">{props.cardtitle}</h5>
            <p className="card-text"><b>{props.cardtext}</b></p>
            <a href={props.categorypath} className="btn btn-lg btn-outline-dark expbtn">Explore</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
