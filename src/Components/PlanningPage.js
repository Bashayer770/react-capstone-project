import React, { useState } from "react";

import WorldMap from "../svg/worldMap";
import { countries } from "./CountryData";
import slogo from "../Assests/slogo.png";
import Pluscircle from "../svg/pluscircle";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CloseIcon from "../svg/CloseIcon";
import CountrySelector from "./countrySelector";
import { getPlan } from "./plan";
import { useQuery } from "@tanstack/react-query";
import { AddPlan } from "./AddPlan";
import { been } from "./been";
import { plan } from "./plan";

const PlanningPage = () => {
  const [showAddPlan, setShowAddPlan] = useState(false);
  //been = { thePlan };
  const response = useQuery(["myPlanList"], getPlan);
  const thePlan = response?.data || [];
  const onClick2 = (e) => {
    alert(e);
  };
  return (
    <>
      <div className="mapContainer">
        <div className="PLAN">
          P L A N N I N G
          <div className="PLAN2">
            <div
              className="addCountryButton2"
              onClick={() => {
                setShowAddPlan(true);
              }}
            >
              <Pluscircle />
            </div>
          </div>
        </div>
        <div className="beenUnderLine2"></div>

        <div className="scrollBar">
          <TransformWrapper limitToBounds={false}>
            <TransformComponent>
              <WorldMap
                className={"map map-2"}
                thePlan={thePlan}
                width="2000"
                onclick={onClick2}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
      {showAddPlan && <AddPlan setShowAddPlan={setShowAddPlan} />}
    </>
  );
};
export default PlanningPage;
