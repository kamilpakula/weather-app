import "../styles/App.css";
import React from "react";
import { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import Nav from "./Nav";

const key = "7f118c2d400c089aee2ac255134cae9c";
class App extends Component {
    state = {
        value: "",
        date: "",
        city: "",
        sunrise: "",
        sunset: "",
        temperature: "",
        presure: "",
        wind: "",
        err: "",
    };
    handleInputChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    handleCitySubmit = (e) => {
        e.preventDefault();
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${key}&units=metric`;

        fetch(API)
            .then((response) => {
                if (response.ok) {
                    return response;
                }
                throw Error("nie udalo sie");
            })
            .then((response) => response.json())
            .then((data) => {
                const time = new Date().toLocaleString();
                this.setState((state) => ({
                    err: false,
                    date: time,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    temperature: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    city: state.value,
                }));
            })
            .catch((err) => {
                this.setState((prevState) => ({
                    err: true,
                    city: prevState.value,
                }));
                console.log(err);
            });
    };
    render() {
        return (
            <div className="App">
                <Nav />

                <Form
                    value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySubmit}
                />
                <Result weather={this.state} />
            </div>
        );
    }
}

export default App;
