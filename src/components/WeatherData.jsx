import useTempStore from "../zustand/tempStore";

export default function WeatherData({ weatherData }) {
  const { temp } = useTempStore();
  const date = new Date(weatherData.location.localtime);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  const temprature = `${
    temp === "C" ? weatherData.current.temp_c : weatherData.current.temp_f
  } °${temp}`;

  return (
    <div className="flex flex-col items-center gap-1 mt-2">
      <h2 className="text-[1.4em] font-semibold max-w-[200rem] text-center">
        {weatherData.location.name}, {weatherData.location.region}
      </h2>
      <p className="text-sm">{formattedDate}</p>
      <div className="flex items-center justify-center">
        <img src={weatherData.current.condition.icon} alt="" />
        <p>{temprature}</p>
      </div>
      <p className="text-sm">{weatherData.current.condition.text}</p>
      <p className="text-sm">Wind Speed: {weatherData.current.wind_kph}km/h</p>
    </div>
  );
}
