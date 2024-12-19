import { Box, styled } from "@mui/material";

export const StyledFlexBox = styled(Box)<{ iscolumn: string | null }>(
  ({ iscolumn }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: iscolumn ? "column" : "row",
    alignItems: "center",
  })
);
