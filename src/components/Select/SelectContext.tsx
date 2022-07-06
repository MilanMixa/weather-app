import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type SelectContextProviderType = {
  children: ReactNode;
};

export type SelectedContextType = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const initialState = { selected: "", setSelected: () => {} };

export const SelectContext = createContext<SelectedContextType>(initialState);

const SelectContextProvider: FC<SelectContextProviderType> = ({ children }) => {
  const [selected, setSelected] = useState<string>("US");
  return (
    <SelectContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
