import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h2">404</Typography>
      <Typography variant="h5">Página não encontrada</Typography>
      <Button component={RouterLink} to="/" variant="contained">
        Voltar para o início
      </Button>
    </Box>
  );
}
