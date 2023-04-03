import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import BeenPage from "./Components/BeenPage";
import PlanningPage from "./Components/PlanningPage";
import Friends from "./Components/Friends";
import Moments from "./Components/Moments";
import LoginModel from "./Components/LoginModel";
import NavBar from "./Components/NavBar";
import SignUpModel from "./Components/SignUpModel";
import MainPage from "./Components/MainPage";
import Test from "./Components/Test";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/*" element={<MainPage />}></Route>
        <Route path="/Login" element={<LoginModel />}></Route>
        <Route path="/signup" element={<SignUpModel />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
