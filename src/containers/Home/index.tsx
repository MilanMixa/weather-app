import { useContext } from "react";
import { SearchContext } from "../../components/Search/SearchContext";
import AverageTemp from "./AverageTemp";
import Form from "./Form";
import useWeather from "./useWeather";
import WeeklyTemp from "./WeeklyTemp";

const Home = () => {
  const { selectedCity } = useContext(SearchContext);

  const { weatherData } = useWeather({
    lat: selectedCity?.lat,
    lon: selectedCity?.lon,
  });

  const firstDay = weatherData?.list[0].dt_txt.substring(0, 10);
  const lastDay = weatherData?.list[
    weatherData.list.length - 1
  ].dt_txt.substring(0, 10);

  console.log(weatherData?.list, "weather data");
  console.log(firstDay, lastDay, "datum");

  return (
    <div className="w-[500px] bg-white flex justify-center items-center flex-col">
      <Form />
      <AverageTemp firstDay={firstDay} lastDay={lastDay} />
      <WeeklyTemp />
    </div>
  );
};

export default Home;
