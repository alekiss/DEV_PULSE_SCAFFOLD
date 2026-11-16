import { Alert } from "@mui/material";
export default function ErrorState() {
  return (
    <Alert severity="error" sx={{ my: 3 }}>
      Não foi possível carregar os dados. Verifique sua conexão e tente
      novamente.
    </Alert>
  );
}
