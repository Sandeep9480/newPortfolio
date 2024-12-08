import React, { useState, useEffect } from "react";

import { About } from "./about/About";
import { Skills } from "./skills/Skills";
import { Experience } from "./experince/Experience";
import Projects from "./projects/Projects";
import ContactSection from "./contact/Contact";
import { Hero } from "./hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000); // Simulates a 7-second loading delay
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "black",
          }}
        >
          {/* Video as a loader */}
          <video autoPlay muted loop width="1600">
            <source src="/13232-246463976_medium.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <ContactSection />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
