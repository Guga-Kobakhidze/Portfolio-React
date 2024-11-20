import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import react from "../../assets/images/react.svg";
import next from "../../assets/images/next.svg";
import mui from "../../assets/images/mui.svg";
import redux from "../../assets/images/redux.svg";
import heroGradient from "../../assets/images/hero-gradient.png";
import { StyledGradientBox, StyledHeroSection } from "./style";
import { Box } from "@mui/material";

const HeroSkills = () => {
  const icons = [
    { id: 1, src: html, alt: "html", position: [170, 321] },
    { id: 2, src: css, alt: "css", position: [320, 162] },
    { id: 3, src: react, alt: "react", position: [270, 580] },
    { id: 4, src: next, alt: "next", position: [500, 280] },
    { id: 5, src: mui, alt: "mui", position: [700, 200] },
    { id: 6, src: redux, alt: "redux", position: [600, 500] },
  ];

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
