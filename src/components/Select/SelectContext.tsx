import { createContext, Dispatch, SetStateAction, useState } from "react";

// type SelectContextProvider = {
//   children: ReactNode;
// };

export type SelectedContextType = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const SelectContext = createContext<SelectedContextType | null>(null);

const SelectContextProvider = ({ children }: any) => {
  const [selected, setSelected] = useState<string>("RS");
  return (
    <SelectContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
