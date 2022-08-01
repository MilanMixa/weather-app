import { createContext, FC, useState } from "react";
import { SelectContextProviderType } from "../Select/SelectContext";

export type CityType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export const SearchContext = createContext<any>({});

const SearchContextProvider: FC<SelectContextProviderType> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState<CityType | null>();

  return (
    <SearchContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
