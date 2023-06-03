import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="desktop-header">
        <div>
          <img alt="HammIcon" />
        </div>
        <div>
          <img alt="ZoomIcon" />
        </div>
        <div>
          <button className="hostbutton">Become a Host</button>
        </div>
        <div>
          <p className="loginsignup">Login/SignUp</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
