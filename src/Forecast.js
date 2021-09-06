import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let latitude = props.coords.lat;
  let longitude = props.coords.lon;
  let apiKey = "521e636942417dbc233358cdf12445eb";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2 forecast-col">
          <div className="forecast-day">Tuesday</div>
          <div className="icon">
            <WeatherIcon code="01d" size={40} />
          </div>
          <div className="forecast-temps">
            <span className="temp-max">
              <span className="max">27</span>°
            </span>
            <span className="temp-min">
              <span className="min"> 22</span>°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
