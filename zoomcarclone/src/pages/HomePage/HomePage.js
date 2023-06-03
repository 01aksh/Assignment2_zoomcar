import React from "react";
import Background from "../../assets/background.png";
import "./HomePage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "../../components/Card/Card";
const HomePage = () => {
  return (
    <div>
      <div className="banner-div">
        <Navbar />
        <img
          src={Background}
          alt="banner"
          className="landing-page-hero-banner-image"
        />
        <div>
          {/* <Card/> */}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
