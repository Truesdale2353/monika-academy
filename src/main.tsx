import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter  } from "react-router";
import { ThemeProvider } from "@mui/material";

import "./index.css";
import App from "./App.tsx";
import theme from "./theme/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter >
        <App />
      </HashRouter >
    </ThemeProvider>
  </StrictMode>
);