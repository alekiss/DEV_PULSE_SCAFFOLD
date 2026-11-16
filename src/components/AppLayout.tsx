import { Box, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Container
        component="main"
        maxWidth="lg"
        sx={{ flex: 1, py: { xs: 3, md: 5 } }}
      >
        <Outlet />
      </Container>
      <Box
        component="footer"
        sx={{ py: 3, borderTop: 1, borderColor: "divider" }}
      >
        <Container maxWidth="lg">
          <Typography variant="caption" color="text.secondary">
            DEVPULSE · UM RADAR DE TECNOLOGIA CONSTRUÍDO COM REACT
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
