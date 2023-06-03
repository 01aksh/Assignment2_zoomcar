import React from "react";
import Background from "../../images/background.png";
import './HomePage.css'
import Navbar from "../Navbar/Navbar";
const HomePage = () => {
  return (
    <div>
      <div className="banner-div">
        <Navbar/>
        <img
          src={Background}
          alt="banner"
          className="landing-page-hero-banner-image"
        />
      </div>
    </div>
  );
};

export default HomePage;
