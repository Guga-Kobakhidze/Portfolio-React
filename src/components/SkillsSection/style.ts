import { Box, keyframes, styled } from "@mui/material";

const StyledImage = {
  userSelect: "none",
  pointerEvents: "none",
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSkillsBox = styled(Box)({
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  height: "560px",
});

export const RotatingContainer = styled(Box)({
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "700px",
  width: "700px",
  borderRadius: "50%",
  position: "relative",
  animation: `${rotate} 45s infinite linear`,
});

export const StyledInnerBox = styled(Box)<{ angle: number }>(({ angle }) => ({
  position: "absolute",
  width: "120px",
  height: "120px",
  borderRadius: "12px",
  backgroundColor: "#1b1b1b",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: `rotate(${angle}deg) translateX(480px)`,
  "& > img": {
    transform: `rotate(90deg)`,
    width: "55px",
    height: "55px",
    objectFit: "fill",
    ...StyledImage,
  },
}));

export const StyledSwiperBox = styled(Box)({
  width: "120px",
  height: "120px",
  borderRadius: "12px",
  backgroundColor: "#1b1b1b",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& > img": {
    width: "55px",
    height: "55px",
    objectFit: "fill",
    ...StyledImage,
  },
});

export const StyledSkillsTitle = styled(Box)({
  position: "absolute",
  left: "50%",
  top: "82%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "80px",

  h2: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "27.32px",
    letterSpacing: "1px",
    height: "50px",
  },

  h1: {
    fontSize: "128px",
    color: "transparent",
    WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)",
    fontWeight: 700,
    lineHeight: "174.85px",
    letterSpacing: "3px",
  },
});
