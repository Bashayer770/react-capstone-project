import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector() {
  const [value, setValue] = useState("");
  const countryOptions = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <>
      <div>Please select the country you've visited:</div>

      <Select options={countryOptions} value={value} onChange={changeHandler} />
    </>
  );
}

export default CountrySelector;
