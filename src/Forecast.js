import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="row">
        <div class="col-2 forecast-col">
          <div class="forecast-day">Tuesday</div>
          <div className="icon">
            <WeatherIcon code="01d" size={40} />
          </div>
          <div class="forecast-temps">
            <span class="temp-max">
              <span class="max">27</span>°
            </span>
            <span class="temp-min">
              <span class="min"> 22</span>°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
