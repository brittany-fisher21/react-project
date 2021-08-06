import React from "react";
import "./App.css";
import TodaysWeather from "./components/TodaysWeather";
import DailyWeather from "./components/DailyWeather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the weather app</h1>
      <TodaysWeather />
      <DailyWeather />
    </div>
  );
}

export default App;
