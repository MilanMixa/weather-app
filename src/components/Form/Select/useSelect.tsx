import { useQuery } from "react-query";
import { getGeo } from "../../../api/geoLocation";

const useSelect = (city: string) => {
  const { data: country, status: countryStatus } = useQuery(
    "country",
    async () => {
      const { data } = await getGeo(city);
      return data;
    }
  );

  return { country, countryStatus };
};

export default useSelect;
