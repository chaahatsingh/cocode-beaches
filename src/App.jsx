import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./pages/HeroSection"; 

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;
