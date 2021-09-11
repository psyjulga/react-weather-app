import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function startAxiosCall() {
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiKey = "521e636942417dbc233358cdf12445eb";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row forecast-row">
          {forecastData.map(function (dailyForecastData, index) {
            if (index < 6) {
              return (
                <div
                  className="col col-4 col-sm-2 forecast-col mb-3"
                  key={index}
                >
                  <ForecastDay data={dailyForecastData} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    startAxiosCall();
    return null;
  }
}
