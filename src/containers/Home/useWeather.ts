import { useQuery } from "react-query";
import { getCityWeather } from "../../api/data";

const useWeather = ({
  lat,
  lon,
}: {
  lat: number | undefined;
  lon: number | undefined;
}) => {
  // fetching weather data
  const { data: weatherData, status: weatherStatus } = useQuery(
    ["weatherData", [lat, lon]],
    async () => {
      const { data } = await getCityWeather(lat as number, lon as number);
      return data;
    },
    { enabled: Boolean(lat && lon) }
  );

  return { weatherData, weatherStatus };
};
export default useWeather;
