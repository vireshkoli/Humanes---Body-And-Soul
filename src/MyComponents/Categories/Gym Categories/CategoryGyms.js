import React from "react";
import "./CategoryGyms.css";
import Gyms from "./Gyms"
import gymsinfoimg from "./gymsinfoimg.jpg"
import gymsinfoimg2 from "./gymsinfoimg2.jpg"

import standardgyms from "./standardgyms.jpg"
import premiumgyms from "./premiumgyms.jpg"
import highpremiumgyms from "./highpremiumgyms.jpg"

function CategoryGyms() {
  return (
    <>
      <div className="gymsheader">
        <h2 className="cattitle floattitle">Gym Categories</h2>
        <div className="catdesc fadeup">
          <h4>Looking For A Gym?</h4>
          <p>Here Are The Different Categories Of Gyms Based On Your Preferences!</p>
        </div>
      </div>
      <div class="container-fluid gymsinfo">
        <img src={gymsinfoimg} class="gymsinfoimg faderight" alt="..."/>
        <img src={gymsinfoimg2} class="gymsinfoimg2 faderight" alt="..."/>
        <div className="gymsinfodesc fadeleft">
          <h2>Gyms Preferences</h2>
          <ul>
            <li>
              <p>
                Standard Gyms For Realible Gym Experience And Budget Friendly
              </p>
            </li>
            <li>
              <p>
                Premium Gyms With Advanced Equipments And Guidance
              </p>
            </li>
            <li>
              <p>High Premium Gyms For The Best Gym Experience</p>
            </li>
          </ul>
        </div>
      </div>
      <Gyms cardimg={standardgyms} cardtitle="Standard Gyms" cardtext="10 - 15K" categorypath="/categorygyms/standardgyms"/>
      <Gyms cardimg={premiumgyms} cardtitle="Premium Gyms" cardtext="15 - 20K" categorypath="/categorygyms/premiumgyms"/>
      <Gyms cardimg={highpremiumgyms} cardtitle="High Premium" cardtext="20 - 30K" categorypath="/categorygyms/highpremiumgyms"/>

    </>
  );
}

export default CategoryGyms;
