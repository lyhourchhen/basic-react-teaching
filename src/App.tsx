import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/card";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/home.page";
import StatePage from "./pages/state.page";
import { Nav } from "./components/nav";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/state" element={<StatePage />} />
      </Routes>
    </div>
  );
}

export default App;
