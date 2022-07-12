import dayjs from "dayjs";
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

  // console.log(weatherData, "weather data");
  // console.log(firstDay, lastDay, "datum");

  // getting single date
  let dailyData: any = [];

  weatherData?.list.forEach((item: { dt: number }) => {
    const dateTime = dayjs.unix(item.dt);
    const day = dateTime.get("date");
    // check if dailyData map has it
    if (!dailyData[day]) dailyData[day] = [];
    dailyData[day].push({ ...item, day });
    return dailyData;
  });

  console.log(dailyData);

  let sum = 0;
  let nesto: any[] = [];

  dailyData?.forEach((element: any, index: any) => {
    console.log(element, "element");
    let min = element[0].main.temp_min;
    let max = element[0].main.temp_max;
    console.log(min, max, "min i max");
    element.forEach((newElement: any) => {
      if (newElement.main.temp_min < min) {
        min = newElement.main.temp_min;
      }
      if (newElement.main.temp_max > max) {
        max = newElement.main.temp_max;
      }
    });
    let dailyAvg = (max + min) / 2;
    nesto[index] = dailyAvg;
    console.log(dailyAvg, "daily avg");
    sum += dailyAvg;
  });

  let avgTemp = sum / 5;
  console.log(avgTemp, "avg temp");
  console.log(nesto, "nesto");

  return (
    <div className="w-[500px] bg-white flex justify-center items-center flex-col">
      <Form />
      <AverageTemp firstDay={firstDay} lastDay={lastDay} avgTemp={avgTemp} />
      <WeeklyTemp />
    </div>
  );
};

export default Home;
