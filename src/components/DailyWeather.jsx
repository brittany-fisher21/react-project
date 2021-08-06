import React, { Component } from "react";
import Moment from "react-moment";
import { Cards } from "react-bootstrap";

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
    const { FiveDay } = this.state;
    return (
      <div>
        <ul>
          {FiveDay.length > 0 ? (
            FiveDay.map((day, index) => (
              <li key={index}>
                <p>
                  sunrise:
                  <Moment unix date={day.sunrise} format="MM/DD/YYYY" />
                </p>

                <p>weather:{day.weather[0].description}</p>
                <p>temp:{Math.round(day.temp.day)}</p>
                <p>feels like: {day.feels_like.day}</p>
              </li>
            ))
          ) : (
            <li>Loading Forecast</li>
          )}
        </ul>
      </div>
    );
  }
}

export default DailyWeather;
