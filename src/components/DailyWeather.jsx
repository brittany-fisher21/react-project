import React, { Component } from "react";
import Moment from "react-moment";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";

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
        {FiveDay.length > 0 ? (
          FiveDay.map((day, index) => (
            <CardGroup>
              <Card.Header>Atlanta</Card.Header>
              <Card.Body>
                <Card.Title>Weekly Weather</Card.Title>
                <Card.Text>
                  {" "}
                  Forescast
                  <Card boarder="info" style={{ width: "50rem" }} key={index}>
                    <p>
                      sunrise:
                      <Moment unix date={day.sunrise} format="MM/DD/YYYY" />
                    </p>

                    <p>weather:{day.weather[0].description}</p>
                    <p>temp:{Math.round(day.temp.day)}</p>
                    <p>feels like: {day.feels_like.day}</p>
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
