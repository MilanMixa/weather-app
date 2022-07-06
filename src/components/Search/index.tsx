import { SetStateAction, useContext } from "react";
import useHome from "../../containers/Home/useHome";
// import { SearchContext } from "./SearchContext";

const Search = () => {
  const { setCity, city } = useHome();
  // console.log(weatherData, "weather data");
  // const { setCity, city } = useContext(SearchContext);
  // const debouncedValue = useDebounce<string>(city, 500);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <input
        className="border"
        type="text"
        placeholder="search"
        onChange={handleChange}
        value={city}
      />
    </div>
  );
};

export default Search;
