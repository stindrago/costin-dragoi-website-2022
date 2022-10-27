import React from "react";
import { Hero, Navbar } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
