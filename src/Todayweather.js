import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "bootstrap/dist/css/bootstrap.css";
import "./Todayweather.css";

export default function Todayweather(props) {
  return (
    <div className="Todayweather row">
      <div className="col-sm-2 icon">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
      </div>

      <div className="output-one col-sm-6">
        <div className="output-city-temp-unit">
          <span className="city-and-temp">
            <span>{props.data.cityOutput} </span>
            <span>{props.data.temp}</span>°
          </span>
          <a href="/" className="celsius link active" title="Celsius Unit">
            C
          </a>
          <span className="pipe">|</span>
          <a href="/" className="fahrenheit link" title="Fahrenheit Unit">
            F
          </a>
        </div>
        <div className="date">
          <FormattedDate date={props.data.date} />
        </div>
      </div>

      <div className="col-sm-4 output-two">
        <ul>
          <li className="wind">Windspeed: {props.data.wind} km/h</li>
          <li className="humidity">Humidity: {props.data.humidity} %</li>
          <li className="description">{props.data.description}</li>
        </ul>
      </div>
    </div>
  );
}
