import React from "react";
import WorldMap from "../svg/worldMap";
import { countries } from "./CountryData";
import slogo from "../Assests/slogo.png";
import Pluscircle from "../svg/pluscircle";
const BeenPage = () => {
  const been = [countries.Argentina, countries.Italy];
  return (
    <>
      <div className="mapContainer">
        <div className="BEEN">
          B E E N
          <div className="BEEN2">
            <div className="addCountryButton">
              <Pluscircle />
            </div>
          </div>
        </div>
        <div className="beenUnderLine"></div>

        <div className="scrollBar">
          <WorldMap className={"map"} been={been} width="2000" />
        </div>
      </div>
    </>
  );
};

export default BeenPage;
