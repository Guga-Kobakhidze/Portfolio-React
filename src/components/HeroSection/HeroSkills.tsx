import heroGradient from "../../assets/images/hero-gradient.png";
import { Box } from "@mui/material";
import { icons } from "../../constants";
import { StyledGradientBox, StyledHeroSection } from "./style";

const HeroSkills = () => {
  return (
    <StyledHeroSection>
      <StyledGradientBox>
        <Box
          component="img"
          className="gradient"
          src={heroGradient}
          alt="gradient"
        />
        {icons.map((icon, index) => (
          <Box
            key={index}
            component="img"
            className="icon"
            src={icon.src}
            alt={icon.alt}
            sx={{
              zIndex: 2,
              position: "absolute",
              top: icon.position[0],
              right: icon.position[1],
            }}
          />
        ))}
      </StyledGradientBox>
    </StyledHeroSection>
  );
};

export default HeroSkills;
