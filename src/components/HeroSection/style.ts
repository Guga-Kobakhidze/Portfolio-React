import { Box, styled } from "@mui/material";
import heroBg from "../../assets/images/hero-bg.png";

const StyledImage = {
  userSelect: "none",
  pointerEvents: "none",
};

export const StyledHeroWrapper = styled(Box)({
  position: "relative",
  padding: "200px 0px 0px 144px",
  marginBottom: "180px",
});

export const StyledHeroSection = styled(Box)({
  backgroundImage: `url(${heroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "440px",

  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  zIndex: 2,

  ".gradient": {
    ...StyledImage,
    position: "absolute",
    right: 0,
    zIndex: 1,
  },

  ".icon": {
    width: "36px",
    height: "36px",
  },
});

export const StyledGradientBox = styled(Box)({
  position: "relative",
});

export const StyledHeroContent = styled(Box)({
  position: "relative",
  zIndex: 2,
  marginBottom: "60px",

  "h1, h2": {
    fontSize: "100px",
    fontWeight: 700,
    lineHeight: "102px",
    letterSpacing: "5px",
  },

  h1: {
    background: "linear-gradient(90deg, #1E7E99, #FFFFFFCC)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    overflow: "hidden",
    marginBottom: "20px",
  },

  h2: {
    marginLeft: "96px",
    color: "#fff",
  },

  p: {
    color: "white",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "27px",
    letterSpacing: "1px",
    maxWidth: "760px",
  },
});
