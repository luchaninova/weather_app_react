import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherDetails = {
    city: "London",
    day: "Friday 16:29",
    weather: "Clear sky",
    image: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 19,
    humidity: 80,
    wind: 4,
  };

  return (
    <section className="Weather">
      <h1>{weatherDetails.city}</h1>
      <div className="current-city">
        <div className="row">
          <div className="col-md-4 pt-4">
            <p className="current-city-details">
              {weatherDetails.day}
              <br />
              {weatherDetails.weather},
            </p>
          </div>
          <div className="col-md-2">
            <div className="clearfix">
              <img
                src={weatherDetails.image}
                alt="Clear"
                className="float-right"
              />
            </div>
          </div>
          <div className="col-md-3 pt-4">
            <p className="current-city-details">
              <span className="current-city-details-temperature">
                {weatherDetails.temperature}
              </span>
              <span className="current-city-details-units"> °C </span>
            </p>
          </div>
          <div className="col-md-3 pt-4">
            <p className="current-city-details">
              Humidity: {weatherDetails.humidity}%
              <br />
              Wind: {weatherDetails.wind} km/h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
