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

  const firstDay: string = weatherData?.list[0].dt_txt.substring(0, 10);
  const lastDay: string = weatherData?.list[
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

  // console.log(dailyData);

  type FiveDayInfo = {
    dailyAvgTemp: number;
    day: number;
  };

  let sum: number = 0;
  let fiveDayInfo: FiveDayInfo[] = [];
  let singleDay: number = 0;

  dailyData?.forEach((element: any, index: number) => {
    // console.log(element, "element");
    let min = element[0].main.temp_min;
    let max = element[0].main.temp_max;
    // console.log(min, max, "min i max");
    element.forEach((newElement: any) => {
      singleDay = newElement.dt;
      // console.log(singleDay, "test test");
      // console.log(newElement, "novi element");
      if (newElement.main.temp_min < min) {
        min = newElement.main.temp_min;
      }
      if (newElement.main.temp_max > max) {
        max = newElement.main.temp_max;
      }
    });
    let dailyAvg = Number(((max + min) / 2).toFixed(0));
    fiveDayInfo[index] = {
      dailyAvgTemp: dailyAvg,
      day: dayjs.unix(singleDay).get("date"),
    };
    // console.log(dailyAvg, "daily avg");
    sum += dailyAvg;
  });

  let avgTemp = Number((sum / 5).toFixed(0));
  // console.log(fiveDayInfo, "nesto");

  return (
    <div className="w-[500px] bg-white flex justify-center items-center flex-col">
      <Form />
      <AverageTemp firstDay={firstDay} lastDay={lastDay} avgTemp={avgTemp} />
      <WeeklyTemp fiveDayInfo={fiveDayInfo} />
    </div>
  );
};

export default Home;
