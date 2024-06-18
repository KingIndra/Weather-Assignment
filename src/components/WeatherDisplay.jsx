import React, { useState } from "react";
import useWeatherApi from "../api/weather";

const WeatherDisplay = ({ city }) => {
  const { weatherData, loading, error, fetchWeather } = useWeatherApi();

  const handleFetchWeather = () => {
    fetchWeather(city);
  };

  return (
    <div>
      <h2>Weather Display</h2>
      <button onClick={handleFetchWeather} disabled={loading}>
        {loading ? "Fetching Weather..." : "Fetch Weather"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default WeatherDisplay;
