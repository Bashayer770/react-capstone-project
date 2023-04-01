import React from "react";
import WorldMap from "../svg/worldMap";
import { countries } from "./CountryData";
const BeenPage = () => {
  return (
    <div>
      <WorldMap
        className={"map"}
        been={[
          countries.Kuwait,
          countries.Afghanistan,
          countries["United Arab Emirates (the)"],
        ]}
      />
    </div>
  );
};

export default BeenPage;
