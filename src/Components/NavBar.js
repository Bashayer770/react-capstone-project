import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import slogo from "../Assests/slogo.png";
import { Link } from "react-router-dom";
import BeenPage from "./BeenPage";
import PlanningPage from "./PlanningPage";
import Friends from "./Friends";
import Chevrondown from "../svg/chevrondown";
import Logout from "../svg/logout";

const NavBar = () => {
  return (
    <div className="leftBar">
      <div className="Logo_">
        <img src={slogo} width="85" />
        <div className="theh5">
          <div>SIGHT</div>
          <div className="Bewhite">S E E R</div>
          <div className="barsTopbelowLogo"></div>
        </div>
      </div>
      <div className="menu_">
        <div className="theMenuList">
          <h5>BEEN</h5>

          <div className="bars"></div>

          <h5>PLANNING</h5>

          <div className="bars"></div>
          <div className="nav-item">
            <h5>FRIENDS</h5>
            <Chevrondown />
          </div>
        </div>
      </div>
      <div className="bars"></div>
      <div
        style={{
          width: "100%",
          height: "150px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          className=""
          style={{
            fontFamily:
              "Franklin Gothic Medium ,Arial Narrow ,Arial, sans-serif",
            textAlign: "center",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 450,
            color: " #FFFFFF",
            letterSpacing: "1px",
          }}
        >
          Username
        </div>
        <div className="" style={{}}></div>
        <div
          className=""
          style={{
            boxSizing: "border-box",

            position: "absolute",
            width: "54px",
            height: "54px",
            borderRadius: "50%",
            left: "12px",

            background:
              "linearradient(186.22 deg '#131C20' -87.4%; rgba(217, 217, 217, 0) 95.09%)",
            border: "1px solid rgba(255, 255, 255, 0.46)",
          }}
        ></div>
        <div className="logouticon">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
