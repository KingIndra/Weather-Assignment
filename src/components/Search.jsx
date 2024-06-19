import React, { useState, useEffect } from "react";
import useWeatherApi from "../api/weather";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import Dropdown from "./Dropdown";
import useTempStore from "../zustand/tempStore";

const Search = () => {
  const { city, setCity, showDropdown, setShowDropdown } = useTempStore();
  const { getWeatherQuery } = useWeatherApi();
  const getWeather = getWeatherQuery(city);

  const weatherData = getWeather.data;
  const error = getWeather.isError;
  const loading = getWeather.isLoading;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 rounded-lg">
        <div className="flex items-center justify-between gap-2 px-1 py-2 pr-2">
          <input
            type="checkbox"
            className="toggle toggle-sm bg-blue-950 hover:bg-blue-900 border-blue-950 transform rotate-90"
            checked={showDropdown}
            onChange={() => setShowDropdown(!showDropdown)}
          />

          <input
            className="bg-transparent focus:outline-none w-full text-black font-semibold"
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter city name"
          />

          <button className="mt-2" disabled={loading}>
            {loading ? (
              <box-icon name="search-alt" animation="flashing"></box-icon>
            ) : (
              <box-icon name="search-alt"></box-icon>
            )}
          </button>
        </div>
        {showDropdown && <Dropdown />}
      </div>

      {error && <p>Error: {error.message}</p>}
      {weatherData && <WeatherData weatherData={weatherData} />}
      {weatherData && <Forecast weatherData={weatherData} />}
      {/* {city === "" && (
        <p className="mt-2 text-sm text-gray-500">Please enter a city name</p>
      )} */}
    </div>
  );
};

export default Search;
