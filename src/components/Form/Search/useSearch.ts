import { useState } from "react";
import { useQuery } from "react-query";
import { getGeo } from "../../../api/geoLocation";
import useDebounce from "../../../hooks/useDebounce";
// import { SearchContext } from "./SearchContext";

const useSearch = () => {
  // const { debouncedValue } = useContext(SearchContext);
  // console.log(debouncedValue);
  // const [city, setCity] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const debouncedValue = useDebounce<string>(city, 500);
  const { data: cityData, status: cityStatus } = useQuery(
    ["city", debouncedValue],
    async () => {
      const { data } = await getGeo(debouncedValue);
      return data;
    }
  );
  return { cityData, cityStatus, city, setCity };
};

export default useSearch;
