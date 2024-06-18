import React, { useState, useEffect } from "react";
import useWeatherApi from "../api/weather";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";

const Search = () => {
  const [city, setCity] = useState("");
  const { weatherData, loading, error, fetchWeather } = useWeatherApi();

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  useEffect(() => {
    const lastSearchedCity = localStorage.getItem("lastSearchedCity");
    if (lastSearchedCity) {
      setCity(lastSearchedCity);
      fetchWeather(lastSearchedCity);
    }
  }, []);

  useEffect(() => {
    if (city.trim() !== "") {
      localStorage.setItem("lastSearchedCity", city);
    }
  }, [city]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between gap-2 bg-gray-100 rounded-full px-8 py-2">
        <input
          className="bg-transparent focus:outline-none w-full text-black font-semibold"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
          disabled={loading}
        />

        <button className="mt-2" onClick={handleSearch} disabled={loading}>
          {loading ? (
            <box-icon name="search-alt" animation="flashing"></box-icon>
          ) : (
            <box-icon name="search-alt"></box-icon>
          )}
        </button>
      </div>

      {error && <p>Error: {error.message}</p>}
      {weatherData && <WeatherData weatherData={weatherData} />}
      {weatherData && <Forecast weatherData={weatherData} />}
      {city === "" && (
        <p className="mt-2 text-sm text-gray-500">Please enter a city name</p>
      )}
    </div>
  );
};

export default Search;
