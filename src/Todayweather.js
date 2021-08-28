import React from "react";
import "./Todayweather.css";

export default function Todayweather() {
  let weatherData = {
    iconUrl:
      "https://purepng.com/public/uploads/large/purepng.com-sunsunlightrayssolar-1411527180985a8mes.png",
    city: "Cologne",
    temp: 15,
    date: "Sunday 16:24",
    wind: 3,
    humidity: 55,
    description: "Clear Sky",
  };

  return (
    <div className="Todayweather row">
      <div className="col-sm-2">
        <img src={weatherData.iconUrl} alt="weather-icon" className="icon" />
      </div>

      <div className="output-one col-sm-6">
        <div className="output-city-temp-unit">
          <span className="city-and-temp">
            <span>{weatherData.city} </span>
            <span>{weatherData.temp}</span>°
          </span>
          <a href="/" className="celsius link active" title="Celsius Unit">
            C
          </a>
          <span className="pipe">|</span>
          <a href="/" className="fahrenheit link" title="Fahrenheit Unit">
            F
          </a>
        </div>
        <div className="date">{weatherData.date}</div>
      </div>

      <div className="col-sm-4 output-two">
        <ul>
          <li className="wind">Windspeed: {weatherData.wind} km/h</li>
          <li className="humidity">Humidity: {weatherData.humidity} %</li>
          <li className="description">{weatherData.description}</li>
        </ul>
      </div>
    </div>
  );
}
