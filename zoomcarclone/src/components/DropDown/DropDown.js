import React from "react";
import { indianCities } from "../../utils";
import './DropDown.css'
const DropDown = () => {
  return (
    <div>
      <section className="select-location">
        <section tabindex="0" class="select-location-select">
          <section class="select-location-select-elem">
            <div class="select-location-select-elem-text">
              <select name="countries">
                <optgroup label="India">
                  {indianCities.map((city) => {
                    return (
                      <option value={city} selected="">
                        {city}
                      </option>
                    );
                  })}
                </optgroup>
                <optgroup label="Indonesia">
                  <option value="mercedes">Mercedes</option>
                </optgroup>
              </select>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default DropDown;
