import { Box, keyframes, styled } from "@mui/material";

const showHide = keyframes`
  0%, 100% {
    border: 1px solid transparent;
  }
  50% {
    border: 1px solid green;
  }
`;

export const StyledHeader = styled(Box)(() => ({
  position: "absolute",
  background: "transparent",
  padding: "56px 72px",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#fff",

  h3: {
    fontSize: "16px",
    fontWeight: 500,
  },
}));

export const StyledOpenToWork = styled(Box)(() => ({
  display: "flex",
  position: "relative",
  alignItems: "center",
  gap: "12px",
  padding: "6px 20px",
  borderRadius: "20px",
  border: "1px solid #292929",

  ".img-animate": {
    position: "relative",

    "&::before, img": {
      content: '""',
      position: "absolute",
      zIndex: 4,
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },

    "&::before": {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      animation: `${showHide} 2s linear infinite`,
    },
  },

  h4: {
    fontSize: "14px",
    fontWeight: 400,
  },
}));
