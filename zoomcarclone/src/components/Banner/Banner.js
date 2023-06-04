import React from "react";
import BannerImage from "../../assets/background.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div
        className="web-banner-web-banner-vertical"
      >
        <div className="web-banner-block-web-banner-block-background">
          <h1 className="web-banner-block-title">
            The perfect car for your next trip is just around the corner
          </h1>
          <h3 className="web-banner-block-sub-title">Book your drive now!</h3>
        </div>{" "}
        <div className="location-calendar">
          <div className="location-calendar-tab">
            145 Nadaprabhu Kempegowda Road...
          </div>{" "}
          <div className="location-calendar-line"></div>{" "}
          <div className="location-calendar-tab">
            4 Jun '23, 12:00 PM - 4 Jun '23, 8:00 PM
          </div>{" "}
          <div className="location-calendar-tab">GET CAR</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
