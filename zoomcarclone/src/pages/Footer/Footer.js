import React from "react";
import "./Footer.css";
import { indianCities } from "../../utils";
import QRCode from "../../assets/qrcode.png";
const Footer = () => {
  
  return (
    <div className="background">
      <div>
        <p className="operatetext">We operate in many other cities</p>
      </div>
      <div className="footer-countries">
        <div className="footer-country-india">
          <div className="country-title">INDIA</div>
          <div className="india-cities">
            {indianCities.map((city) => {
              return (
                <div className="city-div">
                  <p className="city">{city}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="other-country">
          <div className="other-countries-block">
            <div className="other-countries-block-country">INDONESIA</div>
            <div className="other-countries-block-country-city">Jakarta</div>
          </div>
          <div className="other-countries-block">
            <div className="other-countries-block-country">VIETNAM</div>
            <div className="other-countries-block-country-city">
              Ho Chi Minn
            </div>
          </div>
          <div className="other-countries-block">
            <div className="other-countries-block-country">EGYPT</div>
            <div className="other-countries-block-country-city">Cairo</div>
          </div>
        </div>
      </div>
      <div className="keeptouch">
        Let's keep in touch
        <div className="icon-div">
        <i class="bi bi-twitter"></i>
        </div>
      </div>
      <div>
        <div className="footer-qr">
          <div class="footer-qr-footer">
            <p class="footer-text">Never</p>
            <p class="footer-text">Stop</p>
            <p class="footer-text">Living.</p>
          </div>
          <div class="footer-qr-qr">
            <div class="footer-qr-qr-block">
              <div class="footer-qr-qr-block-image">
                <img src={QRCode} alt="qr-code" />
              </div>
              <div class="footer-qr-qr-block-text">
                Scan this QR code to download app.
              </div>
            </div>{" "}
            <div class="footer-qr-qr-desc">
              <div class="footer-qr-qr-desc-title">DOWNLOAD ZOOMCAR APP</div>{" "}
              <div class="footer-qr-qr-desc-description">
                We have incredible offers, discounts &amp; much more in our app.
              </div>{" "}
              <div class="footer-qr-qr-desc-buttons">
                <button className="footerbutton">GooglePlay</button>
                <button className="footerbutton">AppStore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
