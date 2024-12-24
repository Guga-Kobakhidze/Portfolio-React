"use client";
import { GlobalStyles } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { globalStyles, standardTheme } from "../themes/theme";

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={standardTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
