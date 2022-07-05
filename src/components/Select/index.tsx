import { useContext, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { countries } from "../../utils/consts";
import SelectContext from "./SelectContext";

const Select = () => {
  // const [selected, setSelected] = useState<string>("RS");
  // console.log(selected);
  const { selected, setSelected } = useContext(SelectContext);
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
