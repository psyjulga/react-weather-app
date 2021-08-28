import React, { useState } from "react";
import axios from "axios";
import "./Searchform.css";

export default function Searchform() {
  let [cityInput, setCityInput] = useState(false);

  let [city, setCity] = useState(" ");

  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      cityOutput: response.data.name,
      temp: Math.round(response.data.main.temp),
      date: "Sunday 16:24",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    setCityInput(true);
  }

  function startAxiosCall(city) {
    let unit = "metric";
    let apiKey = "521e636942417dbc233358cdf12445eb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();

    startAxiosCall(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="Searchform m-4" onSubmit={handleSubmit}>
      <div className="row">
        <div className="city-input-col col-md-9">
          <input
            type="search"
            placeholder="Enter a city ..."
            className="form-control"
            autoComplete={false}
            autoFocus={true}
            onChange={updateCity}
          />
        </div>
        <div className="col-md-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );

  let todayweather = (
    <div className="Todayweather row">
      <div className="col-sm-2">
        <img src={weather.icon} alt="weather-icon" className="icon" />
      </div>

      <div className="output-one col-sm-6">
        <div className="output-city-temp-unit">
          <span className="city-and-temp">
            <span>{weather.cityOutput} </span>
            <span>{weather.temp}</span>°
          </span>
          <a href="/" className="celsius link active" title="Celsius Unit">
            C
          </a>
          <span className="pipe">|</span>
          <a href="/" className="fahrenheit link" title="Fahrenheit Unit">
            F
          </a>
        </div>
        <div className="date">{weather.date}</div>
      </div>

      <div className="col-sm-4 output-two">
        <ul>
          <li className="wind">Windspeed: {weather.wind} km/h</li>
          <li className="humidity">Humidity: {weather.humidity} %</li>
          <li className="description">{weather.description}</li>
        </ul>
      </div>
    </div>
  );

  if (cityInput) {
    return (
      <div className="gotInput">
        <div>{form}</div>
        <div>{todayweather}</div>
      </div>
    );
  } else {
    startAxiosCall("Cologne");
    return (
      <div className="onload">
        <div>{form}</div>
        <div>{todayweather}</div>
      </div>
    );
  }
}
