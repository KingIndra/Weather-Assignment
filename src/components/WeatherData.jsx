export default function WeatherData({ weatherData }) {
  const date = new Date(weatherData.location.localtime);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[1.5em] font-semibold">
        {weatherData.location.name}, {weatherData.location.region}
      </h2>
      <p>{formattedDate}</p>
      <img src={weatherData.current.condition.icon} alt="" />
      {/* <p>Temperature: {weatherData.main.temp.toFixed(1)}°C</p> */}
    </div>
  );
}
