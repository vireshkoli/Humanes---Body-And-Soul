import React from "react";
import "./CategoryTrainers.css";

import trainersinfoimg from "./trainersinfoimg.jpg";
import trainersinfoimg2 from "./trainersinfoimg2.jpg";

import personalimg from "./personalimg.jpg";
import physioimg from "./physioimg.jpg";
import chiropractorimg from "./chiropractorimg.jpg";
import Trainers from "./trainers";

function CategoryTrainers() {
  return (
    <>
      <div className="trainersheader">
        <h2 className="trainerstitle floattitle">Professional Trainers</h2>
        <div className="trainersdesc fadeup">
          <h4>Our Own Certified Trainers And Physicians</h4>
          <p>Unleash Your Full Potential With Personalized Fitness Guidance.</p>
        </div>
      </div>
      <div class="container-fluid trainersinfo">
        <div className="trainersinfodesc fadeleft">
          <h2>Train With The Best</h2>
          <ul>
            <li>
              <p>
                Personalised Trainers With One To One Guidance And
                Professionalised Feedback
              </p>
            </li>
            <li>
              <p>
                Physio Therapists To Increase The Mobility And Eliminate
                Unwanted Pain
              </p>
            </li>
            <li>
              <p>Chiropractors To Fix Your Joints</p>
            </li>
          </ul>
        </div>
        <img src={trainersinfoimg2} class="trainersinfoimg2 faderightopacity" alt="..."/>
        <img src={trainersinfoimg} class="trainersinfoimg faderight" alt="..."/>
      </div>
      <Trainers
        cardimg={personalimg}
        cardtitle="Personal Trainers"
        cardprice="10 - 15K"
        categorypath="/categorytrainers/personaltrainers"
      />
      <Trainers
        cardimg={physioimg}
        cardtitle="Physio Therapists"
        cardprice="5 - 10K"
        categorypath="/categorytrainers/physiotherapists"
      />
      <Trainers
        cardimg={chiropractorimg}
        cardtitle="Chiropractors"
        cardprice="10 - 15K"
        categorypath="/categorytrainers/chiropractors"
      />
    </>
  );
}

export default CategoryTrainers;
