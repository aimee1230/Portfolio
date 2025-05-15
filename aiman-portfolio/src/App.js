import React, { useState, useEffect } from "react";
import { Element, Link } from 'react-scroll';  // Named imports for Element and Link
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);  // Display Welcome for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {showWelcome ? (
        <Welcome />
      ) : (
        <>
          <Navbar />
          <Element name="Home">
            <Home />
          </Element>
          <Element name="About">
            <About />
          </Element>
          <Element name="Projects">
            <Projects />
          </Element>
          <Element name="Contact">
            <Contact />
          </Element>
        </>
      )}
    </div>
  );
}

export default App;
