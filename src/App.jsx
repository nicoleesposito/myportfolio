import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import './index.css';

import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Navbar from "./components/navbar";
import GameReview from "./pages/gamereview";
import Tix from "./pages/tix";
import CloseKnit from "./pages/closeknit";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/game-review" element={<GameReview />} />
        <Route path="/tix" element={<Tix />} />
        <Route path="/closeknit" element={<CloseKnit />} />
      </Routes>
    </div>
  );
}

export default App;
