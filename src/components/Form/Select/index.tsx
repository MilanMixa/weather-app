// import useSelect from "./useSelect";

import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const Select = () => {
  // const { country, countryStatus } = useSelect("London");
  // console.log(country, countryStatus);
  const [selected, setSelected] = useState<string>("");
  console.log(selected);
  return (
    <div className="">
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        countries={["US", "GB", "FR", "DE", "IT", "NL"]}
        customLabels={{
          US: "US",
          GB: "GB",
          FR: "FR",
          DE: "DE",
          IT: "IT",
          NL: "NL",
        }}
      />
    </div>
  );
};

export default Select;
