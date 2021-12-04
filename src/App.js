import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Switch from "react-switch";
import Player from "./Components/Player";
import PlayerDetails from "./Components/PlayerDetails";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/details">Details</Link>
              </li>
            </ul>
          </nav>
          <Routes>
          <Route path="/" element={<Player />} />
          <Route path="/details/:id" element={<PlayerDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
