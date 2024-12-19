import React from "react";
import Header from "../components/Header";
import Experience from "../components/Experience";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";

const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <SkillsSection />
      <Experience />
    </React.Fragment>
  );
};

export default MainPage;
