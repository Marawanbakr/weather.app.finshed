import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Color from "./components/colors";
const API_KEY = "9ba0e851ec18510539ada12bfc4e10d3";
export default class App extends Component {
  state = {
    city: "",
    tempreature: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };

  getWeather = async (e, info) => {
    e.preventDefault();
    // const city = e.target.elements.city.value;
    const city = info.input1;
    // const country = e.target.elements.country.value;
    const country = info.input2;
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C,${country}&appid=${API_KEY}`
    );
    const data = await api.json();
    console.log(data);
    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please Enter Data",
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <Color />
          <Form nemProps={(e, info) => this.getWeather(e, info)} />
          <Weather
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}
