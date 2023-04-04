import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import slogo from "../Assests/slogo.png";
import { Link } from "react-router-dom";
import BeenPage from "./BeenPage";
import PlanningPage from "./PlanningPage";
import Friends from "./Friends";
import Chevrondown from "../svg/chevrondown";
import Logout from "../svg/logout";
import { NavLink } from "react-router-dom";
import { userName } from "./UserName";

const NavBar = () => {
  return (
    <div className="leftBar">
      <div className="leftBar2" />
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
          <NavLink to={"/"}>
            <h5 style={{ cursor: "pointer" }}>BEEN</h5>
          </NavLink>

          <div className="bars"></div>
          <NavLink to={"/Planning"}>
            <h5 style={{ cursor: "pointer" }}>PLANNING</h5>
          </NavLink>

          <div className="bars"></div>
          <div className="nav-item">
            <NavLink to={"/Friends"}>
              <h5 style={{ cursor: "pointer" }}>FRIENDS</h5>
            </NavLink>
            <Chevrondown />
          </div>
        </div>
      </div>
      <div className="bars"></div>
      <div className="lowerContainerLB">
        <div className="lowerContainerLB2">{userName.username}</div>
        <div className="" style={{}}></div>
        <div className="usersIcon">
          <img src={userName.image} width="100%" hight="100%" />
        </div>
        <div className="logouticon">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
