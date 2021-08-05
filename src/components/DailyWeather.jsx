import React, { Component } from "react";

class DailyWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FiveDay: [],
    };
  }

  componentDidMount() {
    this._fetchToday();
  }

  _fetchToday = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.749001&lon=-84.387978&cnt=5&units=imperial&exclude=hourly,minutely&appid=b2a1637dc461239099cfd34e97cebb6a"
    ).then((response) => response.json());

    this.setState({
      FiveDay: response.daily,
    });
    console.log("FiveDay", this.state.FiveDay);
  };
  render() {
    return <div></div>;
  }
}

export default DailyWeather;
