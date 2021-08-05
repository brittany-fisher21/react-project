import "./App.css";
import AdventureApp from "./components/AdventureApp";
import DailyWeather from "./components/DailyWeather";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Adventure App! Enjoy your journey</h1>
      <AdventureApp />
      <DailyWeather />
    </div>
  );
}

export default App;
