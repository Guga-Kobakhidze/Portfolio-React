import { Grid2, styled, Typography } from "@mui/material";

const styles = {
  border: "0.5px solid #1E7E9933",
  backgroundColor: "#1C1C1C",
  borderRadius: "24px",
};

export const StyledRateBox = styled(Grid2)({
  ...styles,
  justifyItems: "center",
  alignContent: "center",
  padding: "32px 72px",
  height: "170px",

  p: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "14.4px",
    letterSpacing: "1px",
    color: "rgba(255, 255, 255, 0.5)",
  },
});

export const StyledRateText = styled(Typography)({
  background: "linear-gradient(179.95deg, #002F70 6.53%, #00C3FF 81.79%)",
  WebkitBackgroundClip: "text",
  color: "transparent",
  fontSize: "52px",
  fontWeight: 500,
  lineHeight: "62.4px",

  span: {
    marginLeft: "5px",
  },
});

export const StyledBiography = styled(Grid2)({
  ...styles,
  position: "relative",
  padding: "32px 48px",
  height: "100%",
  color: "#fff",

  h2: {
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: "33.6px",
    letterSpacing: "2px",
    marginBottom: "24px",
  },

  p: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "1px",
    maxWidth: "360px",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "40px",
  },

  button: {
    border: "1px solid #1E7E9933",
    padding: "10px 24px",
    borderRadius: "40px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "22.4px",
    letterSpacing: "1px",
  },

  ".profile-img": {
    position: "absolute",
    bottom: "2px",
    right: "-40px",
    objectFit: "cover",
    borderRadius: "50%",
  },
});

export const StyledOffersBox = styled(Grid2)({
  ...styles,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "32px",

  h2: {
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: "36px",
    letterSpacing: "1px",
    color: "#fff",
    marginBottom: "24px",
  },
});
