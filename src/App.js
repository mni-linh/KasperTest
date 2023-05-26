import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import RoutesApp from "./routes/RoutesApp";
const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <RoutesApp />
    </ThemeProvider>
  );
}

export default App;
