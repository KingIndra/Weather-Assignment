import useTempStore from "../zustand/tempStore";

export default function Forecast({ weatherData }) {
  const forecast = weatherData.forecast.forecastday;

  return (
    <div className="flex flex-col items-center gap-1 mt-2">
      {forecast.map((obj, i) => {
        return <ForecastCard forecast={obj} key={i} />;
      })}
    </div>
  );
}

function ForecastCard({ forecast }) {
  const { temp } = useTempStore();
  const date = new Date(forecast.date);

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  const temprature = `${
    temp === "C" ? forecast.day.avgtemp_c : forecast.day.avgtemp_f
  } °${temp}`;

  return (
    <div className="flex items-center justify-between w-[15rem]">
      <p className="text-sm">{formattedDate}</p>
      <img className="size-[3rem]" src={forecast.day.condition.icon} alt="" />
      <p className="font-semibold">{temprature}</p>
    </div>
  );
}
