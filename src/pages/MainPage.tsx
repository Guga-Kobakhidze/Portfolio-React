import React from "react";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import Projects from "../components/Projects";

const MainPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <SkillsSection />
      <Experience />
      <Projects />
      <Contact />
    </React.Fragment>
  );
};

export default MainPage;
