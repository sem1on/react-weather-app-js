import React from "react";
import { useState } from "react";





const WeatherIcons = {
    "01d": "/react-weather-app/icons/sunny.svg",
    "01n": "/react-weather-app/icons/night.svg",
    "02d": "/react-weather-app/icons/day.svg",
    "02n": "/react-weather-app/icons/cloudy-night.svg",
    "03d": "/react-weather-app/icons/cloudy.svg",
    "03n": "/react-weather-app/icons/cloudy.svg",
    "04d": "/react-weather-app/icons/perfect-day.svg",
    "04n": "/react-weather-app/icons/cloudy-night.svg",
    "09d": "/react-weather-app/icons/rain.svg",
    "09n": "/react-weather-app/icons/rain-night.svg",
    "10d": "/react-weather-app/icons/rain.svg",
    "10n": "/react-weather-app/icons/rain-night.svg",
    "11d": "/react-weather-app/icons/storm.svg",
    "11n": "/react-weather-app/icons/storm.svg",
};


function App() {
  return (
    <div className="app">
        <div className="container">
            <div className="search-panel">
                <input className="search-input" type="text" placeholder="Enter city . . ."/>   
                <button className="search-button">Go</button>
            </div>
            <div className="main-info">
                <h1>Weather in City</h1>
                <div className="curent-date"> Monday, 23:30</div>
                <div className="info-weather">
                    <div className="waether-icon">
                        <img src={WeatherIcons[0]} alt="vvv" />
                    </div>
                    <div className="info-temp">17 C</div>
                    <div className="info-descr">
                        <div className="info-item">
                            <p>Humidity</p>
                            <p>63%</p>
                        </div>
                        <div className="info-item">
                            <p>wind</p>
                            <p>3.6 km/h</p>
                        </div>
                        <div className="info-item">
                            <p>real feel</p>
                            <p>19 c</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
