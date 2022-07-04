// import { createContext, Dispatch, SetStateAction, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

// // interface IinitialState {
// //   city: string;
// //   setCity: Dispatch<SetStateAction<string>>;
// // }

// // const initialState = { city, setCity };

// export const SearchContext = createContext<any>({});

// export default function SearchContextProvider({ children }: any) {
//   const [city, setCity] = useState<string>("");
//   const debouncedValue = useDebounce<string>(city, 500);

//   return (
//     <SearchContext.Provider value={{ city, setCity, debouncedValue }}>
//       {children}
//     </SearchContext.Provider>
//   );
// }
