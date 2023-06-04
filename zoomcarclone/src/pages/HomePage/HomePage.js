import React, { useState } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Bannersec from "../../components/BannerSec/Bannersec";
import Card from "../../components/Card/Card";
import { categories, sectionTitles } from "../../utils";
import { carDetails } from "../../utils";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./HomePage.scss";
import CarCategories from "../../components/CarCategories/CarCategories";
const HomePage = () => {
  const [activeTitle, setActiveTitle] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  // const [newCars, setNewcars] = useState[""];
  // console.log(newCars);

  return (
    <div>
      <div className="banner-div">
        <Navbar />
        <div>
          <Banner />
        </div>
        <div className="cat-div">
          {categories.map((cat, index) => {
            return (
              <div
                onClick={() => setActiveCategory(index)}
                className={index === activeCategory ? "active title" : "title"}
              >
                <div className="category">
                  <CarCategories cat={cat} />
                </div>
              </div>
            );
          })}
        </div>
        {activeCategory === 0 ? (
          <div className="car-div">
            {carDetails.map((car, index) => {
              return (
                <div className="card-div">
                  <Card car={car} />
                </div>
              );
            })}
          </div>
        ) : activeCategory === 1 ? (
          <p>Lux</p>
        ) : activeCategory === 2 ? (
          <p>Sunroof</p>
        ) : (
          ""
        )}

        <div>
          <Bannersec />
        </div>
        <div>
          <div className="main-container">
            <div className="headings-wrapper">
              {sectionTitles.map((title, index) => {
                return (
                  <div>
                    <h1
                      onClick={() => setActiveTitle(index)}
                      className={
                        index === activeTitle ? "active title" : "title"
                      }
                    >
                      {title}
                    </h1>
                  </div>
                );
              })}
            </div>
            <div>
              {activeTitle === 0 ? (
                <AboutUs />
              ) : activeTitle === 1 ? (
                <div className="data">
                  Find more information about Zoomcar Blogs
                  <span>
                    <a className="link" href="https://www.zoomcar.com/blog/">
                      here
                    </a>
                  </span>
                </div>
              ) : activeTitle === 2 ? (
                <div className="data">
                  Find more information about Zoomcar Careers
                  <span>
                    <a className="link" href="https://www.zoomcar.com/careers">
                      here
                    </a>
                  </span>
                </div>
              ) : (
                <div className="data">
                  Find more information about Zoomcar Help and Support
                  <span>
                    <a className="link" href="https://www.zoomcar.com/faq">
                      here
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
