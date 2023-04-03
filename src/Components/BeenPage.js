import React, { useState } from "react";
import WorldMap from "../svg/worldMap";
import { countries } from "./CountryData";
import slogo from "../Assests/slogo.png";
import Pluscircle from "../svg/pluscircle";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CountrySelector from "./countrySelector";
import CloseIcon from "../svg/CloseIcon";
const BeenPage = () => {
  const [showAddCountry, setShowAddCountry] = useState(false);
  const been = [countries.Argentina, countries.Italy];

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
              <WorldMap className={"map"} been={been} width="2000" />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
      {showAddCountry && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "30%",
              height: "50%",
              backgroundColor: "white",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

              background:
                "linear-gradient(0.14deg, rgba(255, 255, 255, 0.2) 19.87%, rgba(12, 22, 24, 0.2) 100.94%), #131C20",
            }}
          >
            <div className="selectVisited">
              Please select the country you've visited:
            </div>
            <div className="closeIcone" style={{ backgroundColor: "orange" }}>
              <CloseIcon
                onClick={() => {
                  setShowAddCountry(false);
                }}
              />
            </div>
            <div className="visitedUnderLine"></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <CountrySelector />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: "70%",
              position: "absolute",
              zIndex: 1,
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default BeenPage;
