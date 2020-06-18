import React, { useState } from 'react';
import '../styles/main.css';

const API = {
  key: 'e77a8b96b2628539b4ecb96709f06d28',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const WeatherApp = () => {
  const [getInput, setGetInput] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${API.base}weather?q=${getInput}&units=metric&appid=${API.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setGetInput('');
          console.log(result);
        });
    }
  };

  return (
    <div className="info">
      <h2 className="text-center">Welcome to Our Weather Forecast Area</h2>
      <div className="form-group">
        <input
          id="email"
          type="text"
          placeholder="Your City..."
          className="form-control auth-input"
          onChange={(e) => setGetInput(e.target.value)}
          value={getInput}
          onKeyPress={search}
        />
      </div>

      {typeof weather.main !== 'undefined' ? (
        <div className="main">
          <div className="container">
            <div className="state">
              <span>
                <img
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  width="150px"
                  height="150px"
                  alt="hi"
                />
              </span>
            </div>
            <div className="date">
              <span>
                {weather.name}
                ,
                {weather.sys.country}
              </span>
            </div>
            <div className="currentTemp">
              <span>
                Temperature:
                {Math.round(weather.main.temp)}
                &deg;C
              </span>
            </div>
            <div className="sub-container">
              <div className="minmaxTemp">
                <span>
                  Min:
                  {' '}
                  {Math.round(weather.main.temp_min)}
                  {' '}
                  &deg;C &amp; Max:
                  {' '}
                  {Math.round(weather.main.temp_max)}
                  &deg;C
                </span>
              </div>
              <div className="pressure">
                <span>
                  Pressure:
                  {weather.main.pressure}
                </span>
              </div>
              <div className="humidity">
                <span>
                  {' '}
                  Humidity:
                  {weather.main.humidity}
                </span>
              </div>
              <div className="description">
                <p>
                  Condition:
                  {weather.weather[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default WeatherApp;
