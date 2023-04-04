import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Button } from "react-bootstrap";

function CountrySelector({ value, setValue, updatedBeen }) {
  const countryOptions = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div
      style={{
        width: "80%",
      }}
    >
      <Select options={countryOptions} value={value} onChange={changeHandler} />
      <Button
        onClick={updatedBeen}
        className="Button_"
        variant="outline-dark"
        type="submit"
        style={{
          cursor: "pointer",
          width: "80%",
        }}
      >
        DONE
      </Button>
    </div>
  );
}

export default CountrySelector;
