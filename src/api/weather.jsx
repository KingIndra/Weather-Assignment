import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useWeatherApi() {
  const getWeatherQuery = (city = "Delhi") => {
    if (city === "") city = "Delhi";

    return useQuery({
      queryKey: ["getWeather", city],
      queryFn: async () =>
        (
          await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=71f016df484c41f4b2f193321241806&days=5&q=${city}`
          )
        ).data,
    });
  };

  return {
    getWeatherQuery,
  };
}
