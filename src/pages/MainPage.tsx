import { Box } from "@mui/material";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import Experience from "../components/Experience/Experience";

const MainPage = () => {
  return (
    <Box>
      <HeroSection />
      <Navigation />
      <SkillsSection />
      <Experience />
    </Box>
  );
};

export default MainPage;
