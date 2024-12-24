import { FormControlLabel, RadioGroup } from "@mui/material";
import styled from "styled-components";

export const StyledRadioGroup = styled(RadioGroup)({
  margin: "14px 0 0 20px",
  display: "flex",
  justifyContent: "space-between",
  gap: "27px",
});

export const StyledRadioLabel = styled(FormControlLabel)<{
  isselected: string | null;
}>(({ isselected }) => ({
  border: `1px solid ${isselected ? "#1C6478" : "#444444"}`,
  width: "72px",
  height: "42px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "0.3s",
  backgroundColor: isselected ? "#1C6478" : "",
  color: isselected ? "#fff" : "#fff",
  "&:hover": {
    backgroundColor: "rgba(28, 100, 120, 0.35)",
    border: "1px solid #1C6478",
    color: "#fff",
  },
}));

export const helperTextStyle = {
  color: "#f44336",
  fontSize: "0.75rem",
  marginTop: "10px",
};
