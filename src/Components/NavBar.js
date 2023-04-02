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
      <div className="menu_">
        <div className="theMenuList">
          <h5>BEEN</h5>
          <h5>PLANNING</h5>
          <h5>FRIENDS</h5>
        </div>
      </div>
      <div className="profile"></div>
    </div>
  );
};

export default NavBar;
