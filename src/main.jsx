import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008080",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#6495ED ",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
