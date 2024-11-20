import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "40px",
  position: "relative",
  zIndex: 5,
});

export const StyledNavigation = styled(Box)({
  display: "inline-block",
  borderRadius: "32px",
  padding: "1.5px",
  backgroundImage:
    "conic-gradient(from 100.88deg at 53.1% 50%, #3B3B3B -92.55deg, #1E7E99 16.8deg, #3B3B3B 92.36deg, #1E7E99 208.1deg, #3B3B3B 267.45deg, #1E7E99 376.8deg)",

  ul: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    padding: "10px 20px",
    borderRadius: "32px",
    backgroundColor: "#121212",

    a: {
      fontFamily: "Manrope-Regular",
      color: "#fff",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "4%",
      transition: "0.3s",
      cursor: "pointer",

      "&:hover": {
        color: "#1E7E99",
      },
    },
  },
});
