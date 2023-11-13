import React from "react";
import "./Standard.css";
import Gymscard from "../GymCards/Gymscard";
import { Gymdata } from "./Data";

function Standard() {
  return (
    <>
      <div className="container">
        Hi I Am Standard Gym
      </div>
      <div className="gymcards">
        <Gymscard
          logo={Gymdata.fitnessforever.logo}
          title={Gymdata.fitnessforever.title}
          desc={Gymdata.fitnessforever.description}
          price={Gymdata.fitnessforever.price}
          dropimg={Gymdata.fitnessforever.dropimg}
          address={Gymdata.fitnessforever.address}
          dropdown={Gymdata.fitnessforever.specifications}
        />
        <Gymscard
          logo={Gymdata.warriorfitness.logo}
          title={Gymdata.warriorfitness.title}
          desc={Gymdata.warriorfitness.description}
          price={Gymdata.warriorfitness.price}
          dropimg={Gymdata.warriorfitness.dropimg}
          address={Gymdata.warriorfitness.address}
          dropdown={Gymdata.warriorfitness.specifications}
        />
        <Gymscard
          logo={Gymdata.warriorfitness.logo}
          title={Gymdata.warriorfitness.title}
          desc={Gymdata.warriorfitness.description}
          price={Gymdata.warriorfitness.price}
          dropimg={Gymdata.warriorfitness.dropimg}
          address={Gymdata.warriorfitness.address}
          dropdown={Gymdata.warriorfitness.specifications}
        />
        <Gymscard
          logo={Gymdata.fitnessforever.logo}
          title={Gymdata.fitnessforever.title}
          desc={Gymdata.fitnessforever.description}
          price={Gymdata.fitnessforever.price}
          dropimg={Gymdata.fitnessforever.dropimg}
          address={Gymdata.fitnessforever.address}
          dropdown={Gymdata.fitnessforever.specifications}
        />
      </div>
    </>
  );
}

export default Standard;
