import { countries } from "./CountryData";
import byee from "../videosGallery/byee.mp4";

export const been = [countries.Canada];

export const gallery = {
  [countries.Canada]: [byee, byee, byee, byee, byee, byee],
  [countries.Argentina]: [byee],
};

export const addtoBeenList = (country) => {
  been.push(country);
};

export const RemoveCountry = (country) => {
  been = been.filter((x) => x != country);
};

export const getBeen = () => {
  return been;
};

export const getgallery = () => {
  return gallery;
};
