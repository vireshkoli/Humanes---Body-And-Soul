import "./App.css";
import Header from "./MyComponents/Header/Header";
import Slider from "./MyComponents/Slider/Slider";

//Main Category Data
import Category from "./MyComponents/Categories/Category";
import categorygyms from "./MyComponents/Categories/categorygyms.jpg";
import categorytrainers from "./MyComponents/Categories/categorytrainers.jpg";
import categorysupplements from "./MyComponents/Categories/categorysupplements.jpg";
import categoryevents from "./MyComponents/Categories/categoryevents.jpg";

import Footer from "./MyComponents/Footer/Footer";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import About from "./MyComponents/About/About";

//Sub Categories
import CategoryGyms from "./MyComponents/Categories/Gym Categories/CategoryGyms";
import Standard from "./MyComponents/Categories/Gym Categories/GymsData/Standard";

import CategoryTrainers from "./MyComponents/Categories/Personal Trainers/CategoryTrainers";
import Personal from "./MyComponents/Categories/Personal Trainers/Trainer Data/Personal";

import CategorySupplements from "./MyComponents/Categories/Supplements/CategorySupplements"

import CategoryEvents from "./MyComponents/Categories/Upcomming Events/CategoryEvents"
import VegDiet from "./MyComponents/Categories/Upcomming Events/Diets data/VegDiet";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<>
              <Slider />
              <Category
                cardimg={categorygyms}
                cardtitle="Gym Categories"
                cardtext="Select your gym category based on your budget and fitness goals."
                categorypath = "/categorygyms"
              />
              <Category
                cardimg={categorytrainers}
                cardtitle="Personal Trainers"
                cardtext="Find the perfect personal trainer to match your budget and fitness goals."
                categorypath = "/categorytrainers"
              />
              <Category
                cardimg={categorysupplements}
                cardtitle="Supplements"
                cardtext="Discover a wide range of gym supplements and accessories for your fitness journey."
                categorypath = "/categorysupplements"
              />
              <Category
                cardimg={categoryevents}
                cardtitle="Upcomming Events"
                cardtext="Stay tuned for exciting upcoming events that you won't want to miss!"
                categorypath = "/categoryevents"
              />
            </>}
          ></Route>
          <Route exact path="/categorygyms" element={<CategoryGyms />}></Route>
          <Route exact path="/categorygyms/standardgyms" element={<Standard />}></Route>

          <Route exact path="/categorytrainers" element={<CategoryTrainers />}></Route>
          <Route exact path="/categorytrainers/personaltrainers" element={<Personal />}></Route>

          <Route exact path="/categorysupplements" element={<CategorySupplements />}></Route>

          <Route exact path="/categoryevents" element={<CategoryEvents />}></Route>
          <Route exact path="/categoryevents/vegdiet" element={<VegDiet />}></Route>

          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
