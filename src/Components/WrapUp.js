import React, { useState } from "react";
import Plussquare from "../svg/Plussquare.jsx";
import byee from "../videosGallery/byee.mp4";
import { countries } from "./CountryData.js";
import { useParams } from "react-router-dom";
import VideoList from "./VideoList/videoList.js";
import { gallery } from "./been.js";

const WrapUp = () => {
  const [name, setName] = useState("");
  const { country } = useParams();
  const videolist = gallery[country]?.map((x) => <VideoList byee={x} />);
  return (
    <div className="TheBigContainerWrap">
      {/* <div className="counterCountry"></div> */}
      <div className="wrapUpText">
        W R A P U P
        <div className="Inn">
          IN
          <div className="countryName"> {country}</div>
        </div>
      </div>
      <div className="uploadForm">
        <Plussquare />
      </div>

      <div className="listContainer">{videolist}</div>

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
