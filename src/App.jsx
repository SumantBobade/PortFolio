import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import ClosingCTA from "./Components/ClosingCTA";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/PortFolio">
      <div className="relative min-h-screen overflow-hidden bg-[#020617]">
        <div className="absolute left-10 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[220px]" />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
