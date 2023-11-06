import React from "react";
import "./About.css";
import humaneslogo from "./humaneslogo.png";

function About() {
  return (
    <div className="about">
      <div className="aboutimg floatimg">
        <img src={humaneslogo} alt="" />
      </div>
      <h3>
        Welcome to Humanes - Body And Soul, your ultimate destination for a
        healthier, fitter you!
      </h3>
      <p>
        <h4>🏋️‍♂️ Discover the Perfect Gym for You 🏋️‍♀️</h4>
        At Humanes, we understand that your fitness journey is unique. That's
        why we offer a wide range of gyms across the region, each tailored to
        different fitness categories. Whether you're into strength training,
        cardio, yoga, or CrossFit, we've got the perfect gym for you. With our
        user-friendly interface, you can easily browse and enroll in memberships
        at the gym that suits your preferences and fitness goals.
      </p>

      <p>
        <h4>💪 Personalized Trainers for Your Success 💪</h4>
        Achieving your fitness goals has never been more attainable with our
        dedicated and certified trainers. They'll work closely with you, helping
        you set and reach your objectives. You can choose a personalized trainer
        on a weekly or monthly basis, ensuring that your fitness journey is
        tailored just for you.
      </p>

      <p>
        <h4>🛍️ Explore Our E-commerce Store 🛍️</h4>
        Upgrade your fitness game with our premium selection of supplements and
        accessories. We've curated a collection of high-quality products to
        support your fitness regime. From protein shakes to resistance bands, we
        have everything you need to fuel your workouts and enhance your
        progress. Our e-commerce section makes it convenient for you to get the
        gear and nutrition that's right for you.
      </p>

      <p>
        <h4>📅 Stay In the Know with Upcoming Events 📅</h4>
        We believe in keeping you motivated and informed. Our events section
        will keep you updated on all the latest fitness happenings in your
        region. Whether it's workshops, marathons, or group fitness classes,
        we've got you covered. Stay connected and stay inspired!
      </p>

      <p>
        Join the Humanes community and transform your body and soul. Your
        fitness journey begins here! 💪🌟
      </p>
    </div>
  );
}

export default About;
