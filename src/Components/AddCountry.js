import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
export const AddCountry = () => {
  //const queryClient = useQueryClient();
  //const Addedcountry = useMutation((values) => Add(values), {
  // onSuccess: () => queryClient.invalidateQueries(["countries"]),
  //});

  //const navigate = useNavigate();

  //const submit = (values, { reset }) => {
  //AddedBook.mutate(values);
  //console.log(values);
  //navigate("/been");}

  return (
    <>
      <div>Please select the country you've visited:</div>
    </>
  );
};
