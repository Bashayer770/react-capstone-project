import React from "react";
import { Navbar } from "react-bootstrap";
import slogo from "../Assests/slogo.png";

const NavBar = () => {
  return (
    <div className="leftBar">
      <div className="Logo_">
        <img src={slogo} width="85" />
        <div className="theh5">
          <div>SIGHT</div>
          <div className="Bewhite">SEER</div>
        </div>
      </div>
      <div className="menu_"></div>
      <div className="profile"></div>
    </div>
  );
};

export default NavBar;
