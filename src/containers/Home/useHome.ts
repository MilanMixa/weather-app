import { useContext } from "react";
import { useQuery } from "react-query";
import { getGeo } from "../../api/data";
import { SelectContext } from "../../components/Select/SelectContext";
import useDebounce from "../../hooks/useDebounce";

const useHome = ({ search }: { search: string }) => {
  const { selected } = useContext(SelectContext);

  // fetching lon and lat
  const { data: cityData, status: cityStatus } = useQuery(
    ["city", useDebounce(search), selected],
    async () => {
      const { data: cityData } = await getGeo(search, selected);
      return cityData;
    },
    { enabled: Boolean(search.length) }
  );

  return { cityData, cityStatus };
};

export default useHome;
