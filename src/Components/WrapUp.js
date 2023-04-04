import React from "react";
import Plussquare from "../svg/Plussquare.jsx";

const WrapUp = () => {
  return (
    <div className="TheBigContainerWrap">
      {/* <div className="counterCountry"></div> */}
      <div className="wrapUpText">
        W R A P U P
        <div className="Inn">
          IN
          <div className="countryName">country name</div>
        </div>
      </div>
      <div className="uploadForm">
        <Plussquare />
      </div>
      <div className="listContainer">
        <div className="theListBorder"></div>
      </div>
    </div>
  );
};

export default WrapUp;
