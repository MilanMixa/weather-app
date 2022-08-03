import dayjs from "dayjs";
import { useContext } from "react";
import { SearchContext } from "../../components/Search/SearchContext";
import AverageTemp from "./AverageTemp";
import Form from "./Form";
import useWeather from "./useWeather";
import WeeklyTemp from "./WeeklyTemp";

export type FiveDayInfo = {
  dailyAvgTemp: number;
  day: any;
};

type Main = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
};

type Clouds = {
  all: number;
};

type Sys = {
  pod: string;
};

type Wind = {
  deg: number;
  gust: number;
  speed: number;
};

type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type ElementType = {
  clouds: Clouds;
  day: number;
  dt: number;
  dt_txt: string;
  main: Main;
  pop: number;
  sys: Sys;
  visibility: number;
  weather: Weather[];
  wind: Wind;
};

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

  const city = selectedCity?.name;
  const state = selectedCity?.state;

  // getting single date
  let dailyData: Array<ElementType[]> = [];

  weatherData?.list.forEach((item: ElementType) => {
    const dateTime = dayjs.unix(item.dt);
    const day = dateTime.get("date");
    // check if dailyData map has it
    if (!dailyData[day]) dailyData[day] = [];
    dailyData[day].push({ ...item, day });
    return dailyData;
  });

  let sum: number = 0;
  let fiveDayInfo: FiveDayInfo[] = [];
  let singleDay: number = 0;

  dailyData?.forEach((element: ElementType[], index: number) => {
    // console.log(element, "element");
    let min = element[0].main.temp_min;
    let max = element[0].main.temp_max;
    // console.log(min, max, "min i max");
    element.forEach((newElement: ElementType) => {
      singleDay = newElement.dt;
      console.log(newElement, "novi element");
      console.log(newElement.weather[0].icon, "weather");
      if (newElement.main.temp_min < min) {
        min = newElement.main.temp_min;
      }
      if (newElement.main.temp_max > max) {
        max = newElement.main.temp_max;
      }
    });
    let dailyAvg = Number(((max + min) / 2).toFixed(0));
    console.log(dailyAvg, "daily avg");
    fiveDayInfo[index] = {
      dailyAvgTemp: dailyAvg,
      day: dayjs.unix(singleDay),
    };
    // console.log(dailyAvg, "daily avg");
    sum += dailyAvg;
  });

  let avgTemp = Number((sum / 5).toFixed(0));
  // console.log(fiveDayInfo, "nesto");

  let hue = 40 + (240 * (40 - avgTemp)) / 60;
  // console.log(hue, "hue hue hue");

  if (hue / 100 > 1 && hue > 60 && hue <= 160) {
    hue = 65;
  } else if (hue / 100 <= 1 && hue > 60 && hue < 160) {
    hue = 40;
  }

  if (hue >= 250 && hue <= 360) {
    hue = 240;
  }
  // console.log(hue, "hue");
  // const nestoLudo = (100 / 80) * ((30 + 40) / 80);
  // console.log("nesto lugo", nestoLudo);
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="w-full h-full flex justify-center items-center flex-col"
        style={{
          background: `linear-gradient(120deg, hsl(${hue}, 81.8%, 35%), hsl(${hue}, 100%, 65%), hsl(${
            hue - 40
          }, 100%, 70%))`,
          // background: `linear-gradient(120deg, rgba(14,58,140,1) 0%, rgba(150,218,255,1) ${
          //   80 * (1 - nestoLudo)
          // }%, rgba(255,148,87,1) 100%)`,
        }}
      >
        <div className="w-[500px] bg-white flex justify-center items-center flex-col">
          <Form />
        </div>
        <p>
          {city} {state}
        </p>
        <AverageTemp firstDay={firstDay} lastDay={lastDay} avgTemp={avgTemp} />
        <WeeklyTemp fiveDayInfo={fiveDayInfo} />
      </div>
    </div>
  );
};

export default Home;
