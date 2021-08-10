import React from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import TodaysWeather from "./components/TodaysWeather";
import DailyWeather from "./components/DailyWeather";
import CityForm from "./components/CityForm";
import "bootstrap/dist/css/bootstrap.min.css";

const Responsive = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  return <div>This is responsive</div>;
};

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Weather App</h1>
      <CityForm />
      <TodaysWeather />
      <DailyWeather />
    </div>
  );
}

export default App;
