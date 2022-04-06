import React from "react";
import "../styles/Result.css";

const Result = (props) => {
    const { date, city, sunrise, sunset, temperature, pressure, wind, err } =
        props.weather;
    let content = null;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    const cityUp = city.toUpperCase();
    if (!err && city) {
        content = (
            <div className="Result">
                <h1 className="result__city">
                    <strong>{cityUp}</strong>
                </h1>
                <div className="result__info">
                    <p className="result__element">
                        data: <strong>{date}</strong>
                    </p>
                    <p className="result__element">
                        temperatura: <strong>{temperature} &#176;C</strong>
                    </p>
                    <p className="result__element">
                        wschód słońca: <strong>{sunriseTime}</strong>
                    </p>
                    <p className="result__element">
                        zachód słońca: <strong>{sunsetTime}</strong>
                    </p>
                    <p className="result__element">
                        ciśnienie: <strong>{pressure} hPa</strong>
                    </p>
                    <p className="result__element">
                        prędkość wiatru: <strong>{wind} m/s</strong>
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="Result">
            {err ? `brak danych w bazie ${city}` : content}
        </div>
    );
};

export default Result;
