import React, { useState } from "react";
import Plussquare from "../svg/Plussquare.jsx";
import byee from "../videosGallery/byee.mp4";
import { countries } from "./CountryData.js";

const WrapUp = () => {
  const [name, setName] = useState("");

  return (
    <div className="TheBigContainerWrap">
      {/* <div className="counterCountry"></div> */}
      <div className="wrapUpText">
        W R A P U P
        <div className="Inn">
          IN
          <div className="countryName"></div>
        </div>
      </div>
      <div className="uploadForm">
        <Plussquare />
      </div>

      <div className="listContainer">
        <div className="theListBorder">
          <div className="videoplayer">
            <video width="100%" controls autoPlay>
              <source src={byee} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="theListBorder2">
          <div className="videoplayer">
            <video width="100%" controls autoPlay>
              <source src={byee} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="theListBorder3">
          <div className="videoplayer">
            <video width="100%" controls autoPlay>
              <source src={byee} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="Rightbar">
        <div className="verticleTop"></div>
        <div className="counter_">3</div>
        <div className="verticleBottom"></div>
        <div className="slashDeco1"></div>
        <div className="slashDeco2"></div>
      </div>
    </div>
  );
};

export default WrapUp;
