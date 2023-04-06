import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { addtoPlanList } from "./plan";
import CloseIcon from "../svg/CloseIcon";
import CountrySelector from "./countrySelector";

export const AddPlan = ({ setShowAddPlan }) => {
  const [value, setValue] = useState("");

  const queryClient = useQueryClient();

  const UpdatePlanList = useMutation((values) => addtoPlanList(values), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myBeenList"]);
      setShowAddPlan(false);
    },
  });

  const updatedPlan = () => {
    UpdatePlanList.mutate(value);
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
              setShowAddPlan(false);
            }}
          />
        </div>
        <div className="visitedUnderLine"></div>

        <div className="countrySelector_">
          <CountrySelector
            value={value}
            setValue={setValue}
            updatedBeen={updatedPlan}
          />
        </div>
      </div>
      <div className="countrySelectorOpacity"></div>
    </div>
  );
};
