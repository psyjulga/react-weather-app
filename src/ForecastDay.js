import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[new Date(props.data.dt * 1000).getDay()];
  }

  function maxTemp() {
    return `${Math.round(props.data.temp.max)}°`;
  }

  function minTemp() {
    return `${Math.round(props.data.temp.min)}°`;
  }

  return (
    <div className="ForecastDay>">
      <div className="forecast-day">{day()}</div>
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="forecast-temps">
        <span className="temp-max max">{maxTemp()}</span>
        <span className="temp-min min">{minTemp()}</span>
      </div>
    </div>
  );
}
