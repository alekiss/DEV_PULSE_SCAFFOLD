import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import type { PaletteMode } from "@mui/material/styles";
import { getAppTheme } from "../styles/theme";

type ThemeContextValue = { mode: PaletteMode; toggleMode: () => void };

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type AppThemeProviderProps = { children: ReactNode };

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const toggleMode = () =>
    setMode((current) => (current === "dark" ? "light" : "dark"));
  const theme = useMemo(() => getAppTheme(mode), [mode]);
  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error(
      "useThemeMode deve ser utilizado dentro de AppThemeProvider.",
    );
  return context;
}
