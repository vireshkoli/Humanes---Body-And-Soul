import React from 'react'
import "./trainers.css"

function trainers(props) {
  return (
    <div className="card trainercard mb-3" data-aos="fade-left" data-aos-duration="1000">
      <div className="row g-0">
        <div className="col-md-4 trainercardimg">
          <img src={props.cardimg} className="img-fluid" alt="cardimg" />
        </div>
        <div className="col-md-9 cardcontent">
          <div className="card-body trainercardbody">
            <div className="cardesc">
              <h5 className="card-title trainercardtitle">{props.cardtitle}</h5>
              <p className="card-text trainercardtext">
                <b>{props.cardprice}</b>
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
  )
}

export default trainers