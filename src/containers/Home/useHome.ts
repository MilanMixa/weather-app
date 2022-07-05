import { useState } from "react";
import { useQuery } from "react-query";
import { getCityWeather, getGeo } from "../../api/geoLocation";
import useDebounce from "../../hooks/useDebounce";
// import { SearchContext } from "./SearchContext";

const useHome = () => {
  // const { debouncedValue } = useContext(SearchContext);
  // console.log(debouncedValue);
  // const [city, setCity] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [cordinates, setCordinates] = useState<any>([]);
  const debouncedValue = useDebounce<string>(city, 500);
  console.log(cordinates, "cordinates");

  // fetching lon and lat
  const { data: weatherData, status: cityStatus } = useQuery(
    ["city", debouncedValue],
    async () => {
      const { data: cityData } = await getGeo(debouncedValue);
      console.log(cityData, "cityData");
      // const city = cityData.filter((city: any) => city.country === "US");
      // console.log(city, "test");
      // city.reduce((acc: any, item: any) => (acc += item), []);
      const lotAndLanStates: { lat: string; lon: string }[] = [];
      cityData.forEach((data: any) => {
        if (data.country === "US") {
          //     setCordinates([{ lat: data.lon, lon: data.lat }]);
          lotAndLanStates.push({ lat: data.lon, lon: data.lat });
          //     console.log(data.lon, data.lat, "data");
        }
      });
      setCordinates(lotAndLanStates);
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
