import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DonorSection from "./components/DonorSection";
import Footer from "./components/Footer";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <DonorSection />
      <Footer />
    </>
  );
}

export default App;