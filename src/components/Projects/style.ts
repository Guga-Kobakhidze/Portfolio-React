import { Box, Grid2, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const MotiondImage = motion.create("img");

export const StyledImageBox = styled(Box)({
  position: "absolute",
  zIndex: 9,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  img: { objectFit: "fill", borderRadius: "10px" },
});

export const StyledProjectard = styled(Grid2)({
  padding: "40px 0",
  alignItems: "center",
  transition: "0.3s",
  borderBottom: "1px solid #0C222666",
  ":hover": { backgroundColor: "#0C222666" },
  cursor: "pointer",
  "&:nth-of-type(2)": {
    borderTop: "1px solid #0C222666",
  },
});

export const StyledTypeography = styled(Typography)({
  fontSize: "22px",
  fontWeight: 500,
  lineHeight: "40px",
  letterSpacing: "1px",
  color: "#fff",
  textTransform: "uppercase",
});
