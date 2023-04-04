import { countries } from "./CountryData";

export const been = [countries.Canada];

export const addtoBeenList = (country) => {
  been.push(country);
};

export const RemoveCountry = (country) => {
  been = been.filter((x) => x != country);
};

export const getBeen = () => {
  return been;
};
