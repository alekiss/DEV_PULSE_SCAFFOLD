import { Alert, Stack } from "@mui/material";
import PageHeading from "../components/PageHeading";

export default function NewsDetailsPage() {
  return (
    <Stack spacing={3}>
      <PageHeading
        eyebrow="DEVPULSE · DETALHES"
        title="Detalhes da notícia"
        description="Nesta tela vamos consultar uma notícia específica usando o identificador presente na URL."
      />
      <Alert severity="info">
        A consulta individual e a exibição dos detalhes serão implementadas
        durante a aula.
      </Alert>
    </Stack>
  );
}
