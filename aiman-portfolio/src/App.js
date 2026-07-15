import React, { useState, useEffect } from "react";
import { Element } from 'react-scroll';  // Named import for Element
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);  // Display Welcome for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#212529] min-h-screen text-white">
      {showWelcome ? (
        <Welcome />
      ) : (
        <>
          {/* Navbar sits safely at the top level */}
          <Navbar />
          
          {/* Standard scroll container so window scrolling and react-scroll work perfectly */}
          <main className="w-full">
            
            <Element name="Home">
              <Home />
            </Element>

            <Element name="About">
              <About />
            </Element>

            <Element name="Experience">
              <Experience />
            </Element>

            <Element name="Projects">
              <Projects />
            </Element>

            <Element name="Contact">
              <Contact />
            </Element>

          </main>
        </>
      )}
    </div>
  );
}

export default App;