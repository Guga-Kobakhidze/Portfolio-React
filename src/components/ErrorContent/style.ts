import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  display: "flex",
  gap: "8px",
  padding: "10px 15px",
}));
