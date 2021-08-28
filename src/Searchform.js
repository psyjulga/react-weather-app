import React, { useState } from "react";
import axios from "axios";
import "./Searchform.css";

export default function Searchform() {
  let [city, setCity] = useState(" ");
  let [weather, setWeather] = useState({});

  let [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function startAxiosCall(event) {
    event.preventDefault();
    let unit = "metric";
    let apiKey = "521e636942417dbc233358cdf12445eb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="Searchform m-4" onSubmit={startAxiosCall}>
      <div className="row">
        <div className="city-input-col col-md-9">
          <input
            type="search"
            placeholder="Enter a city ..."
            className="form-control"
            autoComplete="off"
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

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temp)}°C</li>
          <li className="description">Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
