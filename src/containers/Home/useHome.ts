import { useContext } from "react";
import { useQuery } from "react-query";
import { getGeo } from "../../api/data";
import { SelectContext } from "../../components/Select/SelectContext";
import useDebounce from "../../hooks/useDebounce";

const useHome = ({ search }: { search: string }) => {
  const { selected } = useContext(SelectContext);
  const debouncedValue = useDebounce<string>(search);

  // fetching lon and lat
  const { data: cityData, status: cityStatus } = useQuery(
    ["city", debouncedValue, selected],
    async () => {
      const { data: cityData } = await getGeo(debouncedValue, selected);
      return cityData;
    },
    { enabled: Boolean(debouncedValue.length) }
  );

  return { cityData, cityStatus };
};

export default useHome;
