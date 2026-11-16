import { Alert, Stack } from "@mui/material";
import PageHeading from "../components/PageHeading";

export default function HomePage() {
  return (
    <Stack spacing={3}>
      <PageHeading
        eyebrow="TECH RADAR · 2026"
        title="O que está acontecendo no mundo da tecnologia?"
        description="Explore notícias e discussões sobre inteligência artificial, agentes, ferramentas e desenvolvimento de software."
      />
      <Alert severity="info">
        A listagem dinâmica, a pesquisa e a integração com a API serão
        desenvolvidas durante a aula.
      </Alert>
    </Stack>
  );
}
