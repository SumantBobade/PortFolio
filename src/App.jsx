import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-[#020617]">
        <div className="absolute left-10 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[220px]" />

        <Navbar />

        {/* Hero Section */}
        <Hero/>
      </div>
    </>
  );
}

export default App;
