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
import { HIGHPREGYMDATA, PREGYMDATA, STDGYMDATA } from "./MyComponents/Categories/Gym Categories/GymsData/Data";
import CategoryGyms from "./MyComponents/Categories/Gym Categories/CategoryGyms";
import GymsContainer from "./MyComponents/Categories/Gym Categories/GymsData/GymsContainer";

import { PERSONALDATA, PHYSIODATA, CHIRODATA } from "./MyComponents/Categories/Wellness Professionals/Trainer Data/Data";
import CategoryTrainers from "./MyComponents/Categories/Wellness Professionals/CategoryTrainers";
import TrainersContainer from "./MyComponents/Categories/Wellness Professionals/Trainer Data/TrainersContainer";

import CategorySupplements from "./MyComponents/Categories/Supplements/CategorySupplements"

import CategoryEvents from "./MyComponents/Categories/Upcomming Events/CategoryEvents"
import DietsContainer from "./MyComponents/Categories/Upcomming Events/Diets data/DietsContainer";
import { JAINDIETDATA, NONVEGDIETDATA, VEGDIETDATA } from "./MyComponents/Categories/Upcomming Events/Diets data/Data";


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
                cardtitle="Wellness Professionals"
                cardtext="Find the perfect trainers,physiotherapists and chiropractors to match your budget and fitness goals."
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
          <Route exact path="/categorygyms/standardgyms" element={<GymsContainer gymscontainertitle="Standard Gyms" gymscontainerdesctitle="Looking For Standard Gyms ?" gymscontainerdesc="Here Are The Most Well Knowned Standard Gyms" gymsdata={STDGYMDATA}/>}></Route>
          <Route exact path="/categorygyms/premiumgyms" element={<GymsContainer gymscontainertitle="Premium Gyms" gymscontainerdesctitle="Looking For Premium Gyms ?" gymscontainerdesc="Here Are The Most Well Knowned Premium Gyms" gymsdata={PREGYMDATA}/>}></Route>
          <Route exact path="/categorygyms/highpremiumgyms" element={<GymsContainer gymscontainertitle="High Premium Gyms" gymscontainerdesctitle="Looking For High Premium Gyms ?" gymscontainerdesc="Here Are The Most Well Knowned High Premium Gyms" gymsdata={HIGHPREGYMDATA}/>}></Route>

          <Route exact path="/categorytrainers" element={<CategoryTrainers />}></Route>
          <Route exact path="/categorytrainers/personaltrainers" element={<TrainersContainer trainerscontainertitle="Personal Trainers" trainerscontainerdesc="Professional Personal Trainers For You !" trainersdata={PERSONALDATA}/>}></Route>
          <Route exact path="/categorytrainers/physiotherapists" element={<TrainersContainer trainerscontainertitle="Physio Therapist" trainerscontainerdesc="Professional Physio Therapists For You !" trainersdata={PHYSIODATA}/>}></Route>
          <Route exact path="/categorytrainers/chiropractors" element={<TrainersContainer trainerscontainertitle="Chiro Practor" trainerscontainerdesc="Professional Chiropractors For You !" trainersdata={CHIRODATA}/>}></Route>

          <Route exact path="/categorysupplements" element={<CategorySupplements />}></Route>

          <Route exact path="/categoryevents" element={<CategoryEvents />}></Route>
          <Route exact path="/categoryevents/vegdiet" element={<DietsContainer dietsdata={VEGDIETDATA} />}></Route>
          <Route exact path="/categoryevents/nonvegdiet" element={<DietsContainer dietsdata={NONVEGDIETDATA} />}></Route>
          <Route exact path="/categoryevents/jaindiet" element={<DietsContainer dietsdata={JAINDIETDATA} />}></Route>

          <Route exact path="/about" element={<About />}></Route>
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
