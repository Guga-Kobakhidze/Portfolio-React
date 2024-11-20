import { Typography } from "@mui/material";
import { StyledHeroContent, StyledHeroWrapper } from "./style";
import HeroSkills from "./HeroSkills";
import TagElement from "../TagElement/TagElement";
import h1 from "../../assets/images/h1.svg";
import paragraph from "../../assets/images/paragraph.svg";

const HeroSection = () => {
  return (
    <StyledHeroWrapper id="Home">
      <HeroSkills />
      <StyledHeroContent>
        <TagElement img={h1} alt="H1" />
        <Typography variant="h1">Creative</Typography>
        <Typography variant="h2">Front-end Developer</Typography>
      </StyledHeroContent>
      <StyledHeroContent>
        <TagElement img={paragraph} alt="Paragraph" />
        <Typography variant="body1">
          I am creative developer based in Georgia with years of experience in
          front-end development. I turn ideas into dynamic digital experiences,
          crafting intuitive and engaging interfaces that meets todays meets and
          adapt with tomorrow’s challenges
        </Typography>
      </StyledHeroContent>
    </StyledHeroWrapper>
  );
};

export default HeroSection;
