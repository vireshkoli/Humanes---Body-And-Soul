import React from "react";
import "./Gyms.css"

function Gyms(props) {
  return (
    <div className="card gymcard mb-3" data-aos="fade-left" data-aos-duration="1000">
      <div className="row g-0">
        <div className="col-md-4 gymcardimg">
          <img src={props.cardimg} className="img-fluid" alt="cardimg" />
        </div>
        <div className="col-md-7 cardcontent">
          <div className="card-body gymcardbody">
            <div className="cardesc">
              <h5 className="card-title gymcardtitle">{props.cardtitle}</h5>
              <p className="card-text gymcardtext">
              <i class="fa-regular fa-money-bill-1"></i>
                <b>{props.cardtext}</b>
              </p>
            </div>
            <a
              href={props.categorypath}
              className="btn btn-lg btn-outline-dark expbtn"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gyms;
