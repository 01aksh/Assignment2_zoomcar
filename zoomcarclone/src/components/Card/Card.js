import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className="car-list-home-container">
        <div className="car-list-home">
          <div className="car-list">
            <div className="car-list-card">
              <div className="car-list-card-image" style={{height: "160px"}}>
                <img src="https://zoomcar-assets.zoomcar.com/245653/HostCarImage/host_car_image_245653fe375169-08c3-469d-91dd-fbbdf8d61125.jpg20230426-58-10isl1u" />
              </div>{" "}
              <div className="car-list-card-description">
                <div className="car-list-card-description-reviews">
                  <div className="car-list-card-description-reviews-icon">
                    <img src="/img/icons_star.svg" />
                  </div>{" "}
                  <div className="car-list-card-description-reviews-value"></div>{" "}
                  <div className="car-list-card-description-reviews-count"></div>
                </div>{" "}
                <div className="car-list-card-description-title">
                  Tata Safari 2022
                </div>{" "}
                <div className="car-list-card-description-properties">
                  <div className="car-list-card-description-properties-property">
                    Automatic
                    <div className="property-point"></div>
                  </div>
                  <div className="car-list-card-description-properties-property">
                    Diesel
                    <div className="property-point"></div>
                  </div>
                  <div className="car-list-card-description-properties-property">
                    7 Seats
                  </div>
                </div>
              </div>{" "}
              <div className="car-list-card-price-distance">
                <div className="car-list-card-price">
                  <div className="car-list-card-price-availability-text">
                    Available from 6 June
                  </div>{" "}
                  <div className="car-list-card-price-title">₹455/hr</div>{" "}
                  <div className="car-list-card-price-sub-title"></div>
                </div>{" "}
                <div className="car-list-card-distance">
                  <img src="/img/icons_location.svg" alt="location" />{" "}
                  <div className="car-list-card-distance-place">Pune</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
