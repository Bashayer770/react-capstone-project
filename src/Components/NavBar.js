import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import slogo from "../Assests/slogo.png";
import { Link } from "react-router-dom";
import BeenPage from "./BeenPage";
import PlanningPage from "./PlanningPage";
import Friends from "./Friends";

const NavBar = () => {
  return (
    <NavBar>
      <Container>
        <Link to="/">
          <div className="leftBar">
            <div className="Logo_">
              <NavBar.Brand>
                <img src={slogo} width="85" />
                <div className="theh5">
                  <div>SIGHT</div>
                  <div className="Bewhite">SEER</div>
                  <div className="barsTopbelowLogo"></div>
                </div>
              </NavBar.Brand>
            </div>
          </div>
        </Link>
        <Nav>
          <div className="menu_">
            <div className="theMenuList">
              <BeenPage>
                <h5>BEEN</h5>
              </BeenPage>
              <div className="bars"></div>
              <PlanningPage>
                <h5>PLANNING</h5>
              </PlanningPage>
              <div className="bars"></div>
              <Friends>
                <h5>FRIENDS</h5>
              </Friends>
            </div>
          </div>
          <div className="bars"></div>
          <div className="profile"></div>
          <div className="username_">username</div>
        </Nav>
      </Container>
    </NavBar>
  );
};

export default NavBar;
