import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { countries } from "../../../consts/consts";

const Select = () => {
  const [selected, setSelected] = useState<string>("RS");
  console.log(selected);
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
