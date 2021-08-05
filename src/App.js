import React from "react";
import "./App.css";
import TodaysWeather from "./components/TodaysWeather";
import DailyWeather from "./components/DailyWeather";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the weather app</h1>
      <TodaysWeather />
      <DailyWeather />
      <Home />
    </div>
  );
}

export default App;
