import React, { useState } from "react";
import useWeatherApi from "../api/weather";
import TemperatureToggle from "./TemperatureToggle";

const WeatherDisplay = ({ city }) => {
  const { weatherData, loading, error, fetchWeather } = useWeatherApi();
  const [isCelsius, setIsCelsius] = useState(true);

  const handleFetchWeather = () => {
    fetchWeather(city);
  };

  const handleToggle = () => {
    setIsCelsius(!isCelsius);
  };

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  return (
    <div>
      <h2>Weather Display</h2>
      <button onClick={handleFetchWeather} disabled={loading}>
        {loading ? "Fetching Weather..." : "Fetch Weather"}
      </button>
      {error && <p>Error: {error.message}</p>}
      {/* {weatherData && (
        <div>
          <h3>{weatherData.name}</h3>
          <p>
            Temperature:{" "}
            {isCelsius
              ? weatherData.main.temp.toFixed(1) + "°C"
              : convertToFahrenheit(weatherData.main.temp).toFixed(1) + "°F"}
          </p>
          <p>Description: {weatherData.weather[0].description}</p>
          <TemperatureToggle isCelsius={isCelsius} onToggle={handleToggle} />
        </div>
      )} */}
    </div>
  );
};

export default WeatherDisplay;
