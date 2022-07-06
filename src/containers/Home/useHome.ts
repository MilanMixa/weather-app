import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { getCityWeather, getGeo } from "../../api/data";
import { SelectContext } from "../../components/Select/SelectContext";
import useDebounce from "../../hooks/useDebounce";

const useHome = () => {
  // const { debouncedValue } = useContext(SearchContext);
  // console.log(debouncedValue);
  const [city, setCity] = useState<string>("");
  const [cordinates, setCordinates] = useState<any>([]);
  const { selected } = useContext(SelectContext);
  const debouncedValue = useDebounce<string>(city, 500);
  console.log(cordinates, "cordinates");

  // fetching lon and lat
  const { data: weatherData, status: cityStatus } = useQuery(
    ["city", debouncedValue, selected],
    async () => {
      const { data: cityData } = await getGeo(debouncedValue, selected);
      console.log(cityData, "cityData");

      const lonAndLanStates: { lat: string; lon: string }[] = [];
      cityData.forEach((data: any) => {
        if (data.country === selected) {
          lonAndLanStates.push({
            lat: data.lat,
            lon: data.lon,
          });
        }
      });
      setCordinates(lonAndLanStates);

      // fetching weather data
      const { data: weatherData } = await getCityWeather(
        "43.2128473",
        "-75.4557304"
      );
      return weatherData;
    },
    { enabled: Boolean(debouncedValue.length) }
  );

  return { city, setCity, weatherData };
};

export default useHome;
