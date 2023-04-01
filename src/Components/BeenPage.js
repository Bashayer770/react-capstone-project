import React from "react";
import WorldMap from "../svg/worldMap";
import { countries } from "./CountryData";
const BeenPage = () => {
  const been = [countries.Argentina, countries.Italy];
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "20%",
            height: "100%",
            backgroundColor: "grey",
          }}
        ></div>

        <div
          style={{
            width: "80%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "10%",
              width: "100%",
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            BEEN
          </div>
          <div
            style={{
              height: "100%",
              overflow: "scroll",
              marginTop: "1%",
            }}
          >
            <WorldMap className={"map"} been={been} width="2000" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeenPage;
