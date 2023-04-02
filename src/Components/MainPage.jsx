import React from "react";
import { Route, Routes } from "react-router-dom";
import BeenPage from "./BeenPage";
import Friends from "./Friends";
import Moments from "./Moments";
import NavBar from "./NavBar";
import PlanningPage from "./PlanningPage";

const MainPage = () => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<BeenPage />}></Route>
        <Route path="/Been" element={<BeenPage />}></Route>
        <Route path="/Planning" element={<PlanningPage />}></Route>
        <Route path="/Moments" element={<Moments />}></Route>
        <Route path="/Friends" element={<Friends />}></Route>
      </Routes>
    </div>
  );
};

export default MainPage;
