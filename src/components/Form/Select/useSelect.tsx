import { useState } from "react";
import { useQuery } from "react-query";
import { getGeo } from "../../../api/geoLocation";

const useSelect = () => {
  const [city, setCity] = useState("");
  const { data: country, status: countryStatus } = useQuery(
    ["country", city],
    async () => {
      const { data } = await getGeo(city);
      return data;
    }
  );

  return { country, countryStatus, setCity };
};

export default useSelect;
