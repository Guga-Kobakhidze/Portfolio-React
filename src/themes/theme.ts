"use client";
import { createTheme, css } from "@mui/material";

// Light theme
const standardTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined", size: "medium" },
          style: {
            textTransform: "capitalize",
            padding: "12px 0",
            width: "100%",
            fontFamily: "Monrope-Medium, sans-serif",
            color: "#fff",
            border: "1px solid #1e7e99",
          },
        },
      ],
      styleOverrides: {
        root: {
          "@media (max-width:900px)": {
            width: "100%",
            margin: "0",
          },
        },
      },
    },
  },
});

const globalStyles = css`
  :root {
    body {
      background-color: #121212;
      color: #171717;
      font-family: "Monrope-Medium", sans-serif;
    }
  }
`;

export { standardTheme, globalStyles };
