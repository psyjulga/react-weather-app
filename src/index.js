import React from "react";
import ReactDOM from "react-dom";
import Searchform from "./Searchform";
import Todayweather from "./Todayweather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <h1 className="d-none">React Weather App</h1>
          <Searchform />
          <Todayweather />
          <hr />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
