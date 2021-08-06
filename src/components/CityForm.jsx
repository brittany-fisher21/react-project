import React, { Component } from "react";

import TodaysWeather from "./TodaysWeather";

class CityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      state: "",
      current: [],
      weekly: [],
    };
  }
  //something is changing in the state
  _handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  _handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.state},us&appid=3c2facbbe498e0468ed6e5b436dcc588`
    ).then((response) => response.json());

    const { lat, lon } = response.coord;
    const weekly =
      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=3c2facbbe498e0468ed6e5b436dcc588&cnt=7&exclude=current,minutely,hourly&units=imperial
    `).then((response) => response.json());
    this.setState({
      weekly,
    });

    console.log(response);
    this.setState({
      current: response,
    });
    console.log("response", this.state);
  };

  // handling change in the event
  render() {
    const { current } = this.state;
    return (
      <div className="searchbar">
        <form onSubmit={this._handleSubmit}>
          <input
            type="text"
            value={this.state.city}
            onChange={(event) => {
              this._handleChange("city", event.target.value);
            }}
          />
          <input
            type="text"
            value={this.state.state}
            onChange={(event) => {
              this._handleChange("state", event.target.value);
            }}
          />
          <button type="submit">Weather</button>
        </form>
        <TodaysWeather current={current} />
      </div>
    );
  }
}
export default CityForm;
