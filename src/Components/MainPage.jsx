import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useUser } from "../utils/api/Auth/authIndex";
import BeenPage from "./BeenPage";
import CountrySelector from "./countrySelector";
import Friends from "./Friends";
import Moments from "./Moments";
import NavBar from "./NavBar";
import PlanningPage from "./PlanningPage";
import UploadForm from "./uploadForm";
import WrapUp from "./WrapUp";
import ShowDetails from "./showDetails";

const MainPage = () => {
  const navigate = useNavigate();
  const user = useUser();
  if (user?.data == false) return navigate("/login");

  return (
    <div className="container">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<BeenPage />}></Route>
        <Route path="/c" element={<CountrySelector />}></Route>
        <Route path="/Been" element={<BeenPage />}></Route>
        <Route path="/upload/:country" element={<UploadForm />}></Route>
        <Route path="/Planning" element={<PlanningPage />}></Route>
        <Route path="/Moments" element={<Moments />}></Route>
        <Route path="/wrapup/:country" element={<WrapUp />}></Route>
        <Route path="/Friends" element={<Friends />}></Route>
        <Route path="/showdetails/:country" element={<ShowDetails />}></Route>
      </Routes>
    </div>
  );
};

export default MainPage;
