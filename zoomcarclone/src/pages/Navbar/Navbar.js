import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icon-header">
        <div>
          <img alt="HammIcon" />
        </div>
        <div>
          <p className="zoomicon">ZoomIcon</p>
        </div>
      </div>
      <div className="desktop-header">
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
