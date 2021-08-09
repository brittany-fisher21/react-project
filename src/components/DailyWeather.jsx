import React, { Component } from "react";
import Moment from "react-moment";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";

class DailyWeather extends Component {
  constructor() {
    super();
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
      <div class="container">
        {FiveDay.length > 0 ? (
          FiveDay.map((day, index) => (
            <CardGroup align="center">
              <Card.Body>
                <Card.Title>Weekly Weather</Card.Title>
                <Card.Text>
                  {" "}
                  Forescast
                  <Card boarder="info" style={{ width: "50rem" }} key={index}>
                    <p>
                      Sunrise:
                      <Moment unix date={day.sunrise} format="MM/DD/YYYY" />
                    </p>

                    <p>Weather:{day.weather[0].description}</p>
                    <p>Temp:{Math.round(day.temp.day)}</p>
                    <p>Feels Like: {day.feels_like.day}</p>
                  </Card>
                </Card.Text>
              </Card.Body>
            </CardGroup>
          ))
        ) : (
          <p>Loading Forecast</p>
        )}
      </div>
    );
  }
}

export default DailyWeather;
