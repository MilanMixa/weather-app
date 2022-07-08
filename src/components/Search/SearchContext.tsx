import { createContext, Dispatch, SetStateAction, useState } from "react";

// type InitialState {
//   city: string;
//   setCity: Dispatch<SetStateAction<string>>;
// }

// const initialState = { city, setCity };
export type CityType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export const SearchContext = createContext<any>({});

export default function SearchContextProvider({ children }: any) {
  const [selectedCity, setSelectedCity] = useState<CityType | null>();

  return (
    <SearchContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </SearchContext.Provider>
  );
}
