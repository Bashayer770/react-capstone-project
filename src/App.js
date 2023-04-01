import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import BeenPage from "./Components/BeenPage";
import PlanningPage from "./Components/PlanningPage";
import Friends from "./Components/Friends";
import Moments from "./Components/Moments";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<BeenPage />}></Route>
        <Route path="/Been" element={<BeenPage />}></Route>
        <Route path="/Planning" element={<PlanningPage />}></Route>
        <Route path="/Moments" element={<Moments />}></Route>
        <Route path="/Friends" element={<Friends />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
