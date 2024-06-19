import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useWeatherApi() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const getWeatherQuery = (city = "Delhi") => {
    if (city === "") city = "Delhi";

    return useQuery({
      queryKey: ["getWeather", city],
      queryFn: async () =>
        (
          await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}=5&q=${city}`
          )
        ).data,
    });
  };

  return {
    getWeatherQuery,
  };
}
