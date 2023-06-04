import React from "react";
import "./CarCategories.css";

const CarCategories = ({ cat }) => {
  return (
    <div className="category-div">
      <div className="">
        <img alt="Icons" /> <p className="category">{cat}</p>
      </div>
    </div>
  );
};

export default CarCategories;
