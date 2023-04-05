import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Button } from "react-bootstrap";

function CountrySelector({ value, setValue, updatedBeen }) {
  const countryOptions = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    console.log(value.target.value);
    setValue(value.target.value);
  };

  return (
    <div
      className="helloWorld"
      style={{
        width: "80%",
      }}
    >
      {/* <Select options={countryOptions} value={value} onChange={changeHandler} /> */}

      <select
        onChange={changeHandler}
        style={{
          width: "100%",
          height: "45px",
          background: "transparent",
          outline: "none",
          border: "none",
          color: "white",
          borderBottom: "2px solid white",
        }}
      >
        {countryOptions.map((x) => (
          <option
            style={{
              backgroundColor: "none",
            }}
            value={x.label}
          >
            {x.label}
          </option>
        ))}
      </select>
      <Button
        onClick={() => {
          updatedBeen(value);
        }}
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
