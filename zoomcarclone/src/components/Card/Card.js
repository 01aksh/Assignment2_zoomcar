import React from "react";
import "./Card.css";

const Card = ({ car }) => {
  return (
    <div>
      <div className="card-body">
        <div className="image-div">
          <img
            src="https://zoomcar-assets.zoomcar.com/227930/HostCarImage/host_car_image_2279309c721cea-924c-4326-bc16-bf935062ecaa.jpg20230412-73-zv4eu4"
            className="image"
          />
        </div>
        <div className="carName-div">
          <p className="carName">{car.carName} </p>
        </div>
        <div className="carType-div">
          <p className="carType-p">{car.transmission}</p>

          <p className="carType-p">{car.type}</p>
          <p className="carType-p">{car.seats}Seats</p>
        </div>
        <div>
          <hr />
        </div>
        <div className="pricelocation">
          <div className="price-div">
            <p className="availabledate">Avaialble from {car.date}</p>
            <p className="price">${car.price}/hr</p>
          </div>
          <div className="location-div">
            <p className="icon">icon</p>
            <p className="citylocation">{car.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
