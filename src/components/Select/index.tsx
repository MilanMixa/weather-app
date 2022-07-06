import { useContext } from "react";
import ReactFlagsSelect from "react-flags-select";
import { countries } from "../../utils/consts";
import { SelectedContextType, SelectContext } from "./SelectContext";

const Select = () => {
  const { selected, setSelected } =
    useContext<SelectedContextType>(SelectContext);

  return (
    <div className="">
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        customLabels={countries}
      />
    </div>
  );
};

export default Select;
