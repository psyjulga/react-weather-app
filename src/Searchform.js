import React, { useState } from "react";
import axios from "axios";
import Todayweather from "./Todayweather";
import Forecast from "./Forecast";

import "bootstrap/dist/css/bootstrap.css";
import "./Searchform.css";

export default function Searchform() {
  let [city, setCity] = useState(" ");

  let [weather, setWeather] = useState({ cityInput: false });

  function displayWeather(response) {
    setWeather({
      cityInput: true,
      cityOutput: response.data.name,
      temp: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
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
            autoComplete={"false"}
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

  if (weather.cityInput) {
    return (
      <div className="gotInput">
        {" "}
        <div>{form}</div>
        <Todayweather data={weather} />
        <hr />
        <Forecast coords={weather.coordinates} />
      </div>
    );
  } else {
    startAxiosCall("Cologne");
    return <div className="onload">Loading weather ...</div>;
  }
}
