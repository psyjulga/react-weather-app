import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

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
          <span className="city-and-temp city">{props.data.cityOutput} </span>

          <Temperature celsius={props.data.temp} />
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
