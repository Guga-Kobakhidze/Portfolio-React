import h1 from "../../assets/images/h1.svg";
import paragraph from "../../assets/images/paragraph.svg";
import HeroSkills from "./HeroSkills";
import TagElement from "../TagElement";
import { Typography } from "@mui/material";
import { StyledHeroContent, StyledHeroWrapper } from "./style";

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
          I am a creative developer based in Georgia with extensive experience
          in front-end development. I specialize in transforming ideas into
          dynamic digital experiences by designing intuitive, engaging, and
          responsive interfaces. My work bridges today’s needs with tomorrow’s
          possibilities, ensuring every project is future-ready and impactful.
        </Typography>
      </StyledHeroContent>
    </StyledHeroWrapper>
  );
};

export default HeroSection;
