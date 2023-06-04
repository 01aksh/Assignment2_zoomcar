import React from "react";
import Banner2 from "../../assets/banner2.jpg";
import "./Bannersec.css";
const Bannersec = () => {
  return (
    <div>
      <section class="web-banner-image">
        <img
          src="https://zoomcar-assets.zoomcar.com/images/original/1a66b1dffc1c18e0b598ee3bf564e35a5e462a53.jpg?1680853225"
          alt="web-banner"
          class="web-banner-image-img"
        />{" "}
        <div class="web-banner-image-block-web-banner-image-block-background">
          <h1 class="web-banner-image-block-title">
            Largest car sharing marketplace
          </h1>{" "}
          <h3 class="web-banner-image-block-sub-title">
            Sedans for short distances, SUVs for tough terrains, luxury cars for
            surprises - we’ve got it all!
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Bannersec;
