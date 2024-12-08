import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes

import { About } from "./Components/about/About.jsx";
import { Skills } from "./Components/skills/Skills.jsx";
import { Experience } from "./Components/experince/Experience.jsx";
import Projects from "./Components/projects/Projects";
import ContactSection from "./Components/contact/Contact.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import { NavBar } from "./Components/navbar/NavBar.jsx";
import { Hero } from "./Components/hero/Hero.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </div>
  );
};

export default App;
