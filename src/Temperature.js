import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="Temperature">
        <span className="city-and-temp temp">{props.celsius}°</span>
        <a href="/" className="celsius link active" title="Celsius Unit">
          {" "}
          C
        </a>
        <span className="pipe"> |</span>
        <a
          href="/"
          onClick={convertToFahrenheit}
          className="fahrenheit link"
          title="Fahrenheit Unit"
        >
          {" "}
          F
        </a>
      </span>
    );
  } else {
    function fahrenheit() {
      return Math.round((props.celsius * 9) / 5 + 32);
    }

    return (
      <span className="Temperature">
        <span className="city-and-temp temp">{fahrenheit()}°</span>
        <a
          href="/"
          onClick={convertToCelsius}
          className="celsius link"
          title="Celsius Unit"
        >
          {" "}
          C
        </a>
        <span className="pipe"> |</span>
        <a href="/" className="fahrenheit link active" title="Fahrenheit Unit">
          {" "}
          F
        </a>
      </span>
    );
  }
}
