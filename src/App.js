import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./Components/Player";
import PlayerDetails from "./Components/PlayerDetails";

export default function App() {
  const [singleTrack, setSingleTrack] = useState({});

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Player setSingleTrack={setSingleTrack} />}
            />
            <Route
              path="/details/:id"
              element={<PlayerDetails singleTrack={singleTrack} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
