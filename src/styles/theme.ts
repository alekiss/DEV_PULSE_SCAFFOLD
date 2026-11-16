import { createTheme, type PaletteMode } from "@mui/material/styles";

export const getAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#8B5CF6", light: "#A78BFA", dark: "#6D28D9" },
      secondary: { main: "#06B6D4" },
      background: {
        default: mode === "dark" ? "#0B1120" : "#F5F7FB",
        paper: mode === "dark" ? "#111827" : "#FFFFFF",
      },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
      h1: { fontWeight: 800, letterSpacing: "-0.04em" },
      h2: { fontWeight: 750, letterSpacing: "-0.03em" },
      h3: { fontWeight: 700, letterSpacing: "-0.02em" },
      button: { textTransform: "none", fontWeight: 700 },
    },
    components: {
      MuiButton: { styleOverrides: { root: { borderRadius: 10 } } },
      MuiCard: {
        styleOverrides: {
          root: {
            border: "1px solid",
            borderColor:
              mode === "dark"
                ? "rgba(148,163,184,0.14)"
                : "rgba(15,23,42,0.08)",
            boxShadow: "none",
          },
        },
      },
    },
  });
