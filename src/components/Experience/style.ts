import { Box, Grid2, styled } from "@mui/material";

export const StyledImage = {
  userSelect: "none",
  pointerEvents: "none",
};

const orderListBefore = {
  "&::before": {
    content: "counter(list-counter) ''",
    counterIncrement: "list-counter",
    position: "absolute",
    left: "0",
    color: "#fff",
    fontWeight: 700,
  },
};

export const StyledExperianceBox = styled(Grid2)({
  height: "550px",
  maxWidth: "1160px",
  margin: "180px auto 170px",
  position: "relative",
});

export const StyledOrderedList = styled(Box)({
  padding: "32px 16px",

  ol: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    paddingLeft: "16px",
    listStyleType: "none",
    counterReset: "list-counter",
    maxWidth: 780,

    li: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      fontFamily: "Manrope-Light",
      marginLeft: "10px",
      ...orderListBefore,
      b: { color: "#00C3FF" },
    },

    ".work": {
      strong: { color: "#FC04AD" },
      cursor: "pointer",
    },

    ".platform": {
      cursor: "pointer",
      transition: "0.3s",

      "&:hover": {
        color: "#FC04AD",
      },
    },
  },
});

// ExperianceBOx

export const StyledExperiance = styled(Box)({
  position: "absolute",
  color: "#fff",
  minHeight: "230px",
  backgroundColor: "#191919",
  border: "1px solid #444444",

  ".content": {
    padding: "16px",
    display: "flex",
    gap: "32px",
    backgroundColor: "#191919",
    borderBottom: "1px solid #444444",
    justifyContent: "space-between",

    ".image-box": {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
  },
});
