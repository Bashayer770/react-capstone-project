import React from "react";
import WorldMap from "../svg/worldMap";
import { countries } from "./CountryData";
import slogo from "../Assests/slogo.png";
import Pluscircle from "../svg/pluscircle";

const PlanningPage = () => {
  const Planning = [countries.Canada, countries.Spain];
  return (
    <>
      <div className="mapContainer">
        <div className="PLAN">
          P L A N N I N G
          <div className="PLAN2">
            <div className="addCountryButton2">
              <Pluscircle />
            </div>
          </div>
        </div>
        <div className="beenUnderLine2"></div>

        <div className="scrollBar">
          <WorldMap className={"map"} been={Planning} width="2000" />
        </div>
      </div>
    </>
  );
};
export default PlanningPage;
