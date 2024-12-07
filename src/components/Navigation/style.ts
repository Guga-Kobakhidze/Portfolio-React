import { Box, styled } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "40px",
  position: "fixed",
  top: "90%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 5,
});

export const StyledNavigation = styled(Box)({
  display: "inline-block",
  borderRadius: "4px",
  border: "1.5px solid #1E7E99",
  position: "relative",

  ul: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    padding: "15px 30px",
    borderRadius: "2px",
    backgroundColor: "transparent",
    backdropFilter: "blur(20px)",
    Height: "100%",

    a: {
      fontFamily: "Manrope-Regular",
      color: "#E0E0E0",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "1px",
      transition: "0.3s",
      cursor: "pointer",
      textDecoration: "none",

      "&:hover": {
        color: "#1E7E99",
      },
    },
  },
});
