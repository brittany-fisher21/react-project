import React, { Component } from "react";
import { Cards } from "react-bootstrap";

class TodaysWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Today: null,
    };
  }

  componentDidMount() {
    this._fetchToday();
  }

  _fetchToday = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=atlanta,ga,us&units=imperial&appid=c63843e773c335366c8af357b13b226a"
    ).then((response) => response.json());

    this.setState({
      Today: response,
    });

    console.log("state", this.state);
  };

  render() {
    const { Today } = this.state;
    return (
      <>
        {Today !== null ? (
          <div>
            <h3>{Today.name}</h3>
            {Today.main.temp}
            {Today.weather.map((data) => {
              return <p key={data.description}>{data.description}</p>;
            })}
          </div>
        ) : (
          <p>Getting Weather Data</p>
        )}
      </>
    );
  }
}

export default TodaysWeather;
