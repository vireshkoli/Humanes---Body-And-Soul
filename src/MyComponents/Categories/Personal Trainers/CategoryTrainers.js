import React from "react";
import "./CategoryTrainers.css";
import trainersinfoimg from "./trainersinfoimg.jpg";
import Trainers from "./trainers"

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
        <img src={trainersinfoimg} class="trainersinfoimg" alt="..." />
        <div className="trainersinfodesc">
        <h2>Train With The Best</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem aperiam reiciendis eos aut tempore ratione non vitae assumenda eaque ad dicta facere adipisci corrupti culpa magnam quod minus, beatae dolor fugiat sed, nihil voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam numquam, nihil repellat sint quae commodi, doloremque possimus maiores obcaecati illo sequi iste laudantium, tempora nemo iure non. Sequi, cum adipisci fugiat dolorum expedita iste debitis!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ipsam ut laudantium numquam fugit illo reiciendis ullam perferendis blanditiis rem.
        </p>
        </div>
      </div>
        <Trainers cardimg={trainersinfoimg} cardtitle="Personal Trainers" cardtext="10 - 15K" categorypath="/categorytrainers/personaltrainers"/>
    </>
  );
}

export default CategoryTrainers;
