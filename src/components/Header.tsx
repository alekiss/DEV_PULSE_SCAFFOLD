import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import RadarRoundedIcon from "@mui/icons-material/RadarRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { Link as RouterLink } from "react-router-dom";
import { useThemeMode } from "../context/ThemeContext";
export default function Header() {
  const { mode, toggleMode } = useThemeMode();
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        backdropFilter: "blur(14px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
          <RadarRoundedIcon color="primary" sx={{ fontSize: 32 }} />
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontWeight: 850,
              letterSpacing: "-0.04em",
            }}
          >
            DevPulse
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button component={RouterLink} to="/" color="inherit">
            Explorar
          </Button>
          <Button component={RouterLink} to="/salvos" color="inherit">
            Salvos
          </Button>
          <Tooltip
            title={mode === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          >
            <IconButton
              onClick={toggleMode}
              color="inherit"
              aria-label="Alternar tema"
            >
              {mode === "dark" ? (
                <LightModeRoundedIcon />
              ) : (
                <DarkModeRoundedIcon />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
