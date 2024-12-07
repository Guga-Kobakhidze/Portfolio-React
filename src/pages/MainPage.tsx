import SkillsSection from "../components/SkillsSection";
import HeroSection from "../components/HeroSection";
import Experience from "../components/Experience";
import React from "react";

const MainPage = () => {
  console.log("here");
  return (
    <React.Fragment>
      <HeroSection />
      <SkillsSection />
      <Experience />
    </React.Fragment>
  );
};

export default MainPage;
