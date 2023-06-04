import React from "react";
import { aboutUsData } from "../../utils/index";
import "./About.scss";
const AboutUs = () => {
  return (
    <div>
      {aboutUsData.map((data) => {
        return (
          <div className="para-wrapper">
            <p className="title">{data.title}</p>
            {data.isPoints ? (
              <>
                {data.details.map((item) => {
                  return (
                    <>
                      <p className="point-title">{item.point}</p>
                      <p className="detail">{item.description}</p>
                    </>
                  );
                })}
              </>
            ) : (
              <div className="detail">
                {data.details.map((para) => {
                  return <p>{para}</p>;
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AboutUs;