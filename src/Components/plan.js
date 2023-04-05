import { countries } from "./CountryData";

export const plan = [countries.Greece];

export const addtoPlanList = (country) => {
  plan.push(country);
};

export const RemovePlan = (country) => {
  plan = plan.filter((x) => x != country);
};

export const getPlan = () => {
  return plan;
};
