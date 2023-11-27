import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector(setLocation) {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  function handleChange(value) {
    setValue(value);

    setLocation(value);
  }
  return (
    <Select
      className="p-2 border w-full border-gray-300 bg-white rounded"
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
}

export default CountrySelector;
