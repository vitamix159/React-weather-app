import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  const [city, findCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, showWeather] = useState({});

  function displayTemperature(response) {
    setLoaded(true);
    showWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `940eef9ad873fd43d7217c86264acd04`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayTemperature);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  function updateCity(event) {
    findCity(event.target.value);
  }

  if (loaded) {
    return (
      <div>
        {form}
        <ul className="list">
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
