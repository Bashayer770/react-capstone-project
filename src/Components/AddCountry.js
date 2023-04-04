import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { addtoBeenList } from "./been";
import CloseIcon from "../svg/CloseIcon";
import CountrySelector from "./countrySelector";

export const AddCountry = ({ setShowAddCountry }) => {
  const [value, setValue] = useState("");

  const queryClient = useQueryClient();

  const UpdateBeenList = useMutation((values) => addtoBeenList(values), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myBeenList"]);
      setShowAddCountry(false);
    },
  });

  const updatedBeen = () => {
    UpdateBeenList.mutate(value.label);
  };

  return (
    <div className="AddCountryContainer">
      <div className="AddCountryBox">
        <div className="selectVisited">
          Please select the country you've visited:
        </div>
        <div className="closeIcone" style={{ backgroundColor: "orange" }}>
          <CloseIcon
            onClick={() => {
              setShowAddCountry(false);
            }}
          />
        </div>
        <div className="visitedUnderLine"></div>

        <div className="countrySelector_">
          <CountrySelector
            value={value}
            setValue={setValue}
            updatedBeen={updatedBeen}
          />
        </div>
      </div>
      <div className="countrySelectorOpacity"></div>
    </div>
  );
};
