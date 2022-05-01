import React from "react";
import { useState, useEffect } from "react";


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

    const iconImg = `http://openweathermap.org/img/w/${weather.icon}.png`;

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
                            <img src={iconImg} alt="icon" />
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
