import { Alert, Stack } from "@mui/material";
import PageHeading from "../components/PageHeading";

export default function FavoritesPage() {
  return (
    <Stack spacing={3}>
      <PageHeading
        eyebrow="SUA COLEÇÃO"
        title="Notícias salvas"
        description="Aqui ficarão as notícias que você decidir guardar para ler depois."
      />
      <Alert severity="info">
        A listagem de favoritos será conectada ao contexto durante a aula ou
        como atividade complementar.
      </Alert>
    </Stack>
  );
}
