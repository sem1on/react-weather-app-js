import React from "react";
import { useState, useEffect } from "react";

import cloudyNight from './icons/cloudy-night.svg';
import cloudy from './icons/cloudy.svg';
import day from './icons/day.svg';
import night from './icons/night.svg';
import perfectDay from './icons/perfect-day.svg';
import rainNight from './icons/rain-night.svg';
import rain from './icons/rain.svg';
import storm from './icons/storm.svg';
import sunny from './icons/sunny.svg';


function App() {

    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('New York');

    const apiKey = 'd299b9e2dd386315b396cca93c6c0a36'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const searchCity = async () => {
         
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        const data = await response.json();
        
        setWeather({
            name: data.name,
            icon: data.weather[0].icon,
            descr: data.weather[0].description,
            temp: data.main.temp - 273,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            real: data.main.feels_like -273,
        });
        setCity('');
    }

    useEffect(() => {
        searchCity()
    }, []);

    const weatherIcons = {
        "01d": sunny,
        "01n": night,
        "02d": day,
        "02n": cloudyNight,
        "03d": cloudy,
        "03n": cloudy,
        "04d": perfectDay,
        "04n": cloudyNight,
        "09d": rain,
        "09n": rainNight,
        "10d": rain,
        "10n": rainNight,
        "11d": storm,
        "11n": storm,
    };

    return (
        <div className="app">
            <div className="container">
                <div className="search-panel">
                    <input 
                        className="search-input" 
                        type="text" 
                        placeholder="Enter city . . ."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />   
                    <button 
                        className="search-button"
                        type="submit"
                        onClick={searchCity}
                        >
                            search
                    </button>
                </div>
                <div className="main-info">
                    <h1>{weather.name}</h1>
                    <div className="curent-date"> 
                        <p>{weather.descr}</p>
                    </div>
                    <div className="info-weather">
                        <div className="weather-icon">
                            <img src={weatherIcons[weather.icon]} alt="icon" />
                            
                        </div>
                        <div className="info-temp">{Math.floor(weather.temp)}° C</div>
                        <div className="info-descr">
                            <div className="info-item">
                                <p>Humidity</p>
                                <p>{weather.humidity}%</p>
                            </div>
                            <div className="info-item">
                                <p>wind</p>
                                <p>{weather.wind} km/h</p>
                            </div>
                            <div className="info-item">
                                <p>real feel</p>
                                <p>{Math.floor(weather.real)}° C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
