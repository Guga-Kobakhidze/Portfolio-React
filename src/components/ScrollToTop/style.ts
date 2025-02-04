import { Box, styled } from "@mui/material";

export const StyledScrollToTop = styled(Box)({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "2px solid #00C3FF",
  position: "fixed",
  right: "80px",
  bottom: "65px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ".icon": {
    fontSize: "28px",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },
  ":hover": {
    ".icon": {
      color: "#00C3FF",
    },
  },
});
