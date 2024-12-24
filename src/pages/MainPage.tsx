import React from "react";
import Header from "../components/Header";
import Experience from "../components/Experience";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import Contact from "../components/Contact/Contact";

const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <SkillsSection />
      <Experience />
      <Contact />
    </React.Fragment>
  );
};

export default MainPage;
