import React, { useState } from "react";
import WorldMap from "../svg/worldMap";
import { countries } from "./CountryData";
import slogo from "../Assests/slogo.png";
import Pluscircle from "../svg/pluscircle";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CountrySelector from "./countrySelector";
import CloseIcon from "../svg/CloseIcon";
import { AddCountry } from "./AddCountry";
import { useQuery } from "@tanstack/react-query";
import { getBeen } from "./been";
import { useNavigate } from "react-router-dom";

const BeenPage = () => {
  const [showAddCountry, setShowAddCountry] = useState(false);

  const navigate = useNavigate();
  const res = useQuery(["myBeenList"], getBeen);
  const been = res?.data || [];

  //const onClick2 = (e) => {
  //alert(e);

  const onClick2 = () => {
    navigate("/wrapup");
  };

  return (
    <>
      <div className="mapContainer">
        <div className="BEEN">
          B E E N
          <div className="BEEN2">
            <div
              className="addCountryButton"
              onClick={() => {
                setShowAddCountry(true);
              }}
            >
              <Pluscircle />
            </div>
          </div>
        </div>
        <div className="beenUnderLine"></div>

        <div className="scrollBar">
          <TransformWrapper limitToBounds={false} maxScale={1000}>
            <TransformComponent>
              <WorldMap
                className={"map"}
                been={been}
                width="2000"
                onclick={onClick2}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
      {showAddCountry && <AddCountry setShowAddCountry={setShowAddCountry} />}
    </>
  );
};

export default BeenPage;
