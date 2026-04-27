import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import './index.css';

import Home from "./pages/home";
import Projects from "./pages/projects";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import GameReview from "./pages/gamereview";
import Tix from "./pages/tix";
import CloseKnit from "./pages/closeknit";
import SVGogh from "./pages/svgogh";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/game-review" element={<GameReview />} />
        <Route path="/tix" element={<Tix />} />
        <Route path="/closeknit" element={<CloseKnit />} />
        <Route path="/svgogh" element={<SVGogh />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
