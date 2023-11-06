import React from "react";
import backgroundvideo from "./Background Video 2.mp4";
import "./Backgroundvideo.css";

function Backgroundvideo() {
  return (
    <>
      <video id="background-video" controls autoPlay loop>
        <source src={backgroundvideo} type="video/mp4" />
      </video>
    </>
  );
}

export default Backgroundvideo;
