import { useState, useEffect } from "react";
import axios from "axios";

const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city = "Delhi, India") => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=71f016df484c41f4b2f193321241806&days=5&q=${city}`
      );
      console.log(response.data);
      setWeatherData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, fetchWeather };
};

export default useWeatherApi;
