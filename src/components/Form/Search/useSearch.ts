import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { getGeo } from "../../../api/geoLocation";
import { SearchContext } from "./SearchContext";

const useSearch = () => {
  const { debouncedValue } = useContext(SearchContext);
  console.log(debouncedValue);
  // const [city, setCity] = useState<string>("");
  const { data: cityData, status: cityStatus } = useQuery(
    ["city", debouncedValue],
    async () => {
      const { data } = await getGeo(debouncedValue);
      return data;
    }
  );
  return { cityData, cityStatus };
};

export default useSearch;
