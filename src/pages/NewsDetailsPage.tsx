import { useEffect, useState } from "react";
import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { useNavigate, useParams } from "react-router-dom";

import PageHeading from "../components/PageHeading";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import { getNewsById } from "../services/newsService";
import type { NewsItemDetails } from "../types/news";

export default function NewsDetailsPage() {
  const { id } = useParams<{ id: string }>();

  console.log("ID:", id);
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItemDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    let active = true;

    const fetchDetails = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await getNewsById(id);
        if (active) setNews(response);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchDetails();
    return () => {
      active = false;
    };
  }, [id]);

  if (loading)
    return <LoadingState message="Carregando detalhes da notícia..." />;
  if (error || !news) return <ErrorState />;

  const hackerNewsUrl = `https://news.ycombinator.com/item?id=${news.id}`;
  const formattedDate = news.created_at
    ? new Date(news.created_at).toLocaleString("pt-BR")
    : "Data não disponível";

  return (
    <Stack spacing={3}>
      <Button
        startIcon={<ArrowBackRoundedIcon />}
        onClick={() => navigate(-1)}
        sx={{ alignSelf: "flex-start" }}
      >
        Voltar
      </Button>
      <PageHeading
        eyebrow="DEVPULSE · DETALHES"
        title={news.title || "Notícia sem título"}
        description={`Publicada por ${news.author || "autor desconhecido"}`}
      />
      <Paper variant="outlined" sx={{ p: { xs: 2, md: 4 } }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            <Chip label={`${news.points ?? 0} pontos`} color="primary" />
            <Chip label={`${news.children?.length ?? 0} comentários`} />
            <Chip label={formattedDate} variant="outlined" />
          </Stack>
          <Typography color="text.secondary">
            Esta notícia foi encontrada no Hacker News. Acesse a publicação
            original ou consulte a discussão da comunidade.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            {news.url && (
              <Button
                component="a"
                href={news.url}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                endIcon={<OpenInNewRoundedIcon />}
              >
                Acessar notícia original
              </Button>
            )}
            <Button
              component="a"
              href={hackerNewsUrl}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              endIcon={<OpenInNewRoundedIcon />}
            >
              Ver discussão no Hacker News
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
