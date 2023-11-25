import React from "react";
import "./CategoryEvents.css";
import { DIETSDATA } from "./Diets data/Data";
import DietCategoryCard from "./Diets/DietCategoryCard";
import veg from "./veg.png";
import nonveg from "./nonveg.png";
import jain from "./jain.jpg";

function CategoryEvents() {
  return (
    <>
      <div className="eventheader">Hii I am Upcomming Events</div>
      <div className="dietcategories">
        <DietCategoryCard
          categoryimg={veg}
          title="VEG DIET"
          description="A vegetarian fitness diet emphasizes plant-based foods rich in proteins like beans and tofu, along with whole grains and nuts for sustained energy."
          categorypath="categoryevents/vegdiet"
        />
        <DietCategoryCard
          categoryimg={nonveg}
          title="NON-VEG DIET"
          description="A non-vegetarian fitness diet incorporates animal products like lean meats, fish, and eggs for high-quality proteins essential for muscle development."
          categorypath="categoryevents/nonvegdiet"
        />
        <DietCategoryCard
          categoryimg={jain}
          title="JAIN DIET"
          description="A Jain fitness diet excludes root vegetables and certain plant-based foods, focusing on fruits, vegetables, whole grains, and legumes."
          categorypath="categoryevents/jaindiet"
        />
      </div>
    </>
  );
}

export default CategoryEvents;
