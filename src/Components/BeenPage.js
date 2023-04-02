import React from "react";
import WorldMap from "../svg/worldMap";
import { countries } from "./CountryData";
import slogo from "../Assests/slogo.png";
const BeenPage = () => {
  const been = [countries.Argentina, countries.Italy];
  return (
    <>
      <div className="mapContainer">
        <div className="BackGround">
          <div className="BEEN">B E E N</div>
          <div className="scrollBar">
            <WorldMap className={"map"} been={been} width="2000" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeenPage;
