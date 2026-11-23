import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import type { NewsHit } from "../types/news";

type NewsCardProps = {
  news: NewsHit;
  isFavorite: boolean;
  onOpen: () => void;
  onToggleFavorite: () => void;
};

export default function NewsCard({
  news,
  isFavorite,
  onOpen,
  onToggleFavorite,
}: NewsCardProps) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Chip
            label="HACKER NEWS"
            size="small"
            color="primary"
            variant="outlined"
          />
          <Tooltip title={isFavorite ? "Remover dos salvos" : "Salvar notícia"}>
            <IconButton
              size="small"
              onClick={onToggleFavorite}
              aria-label="Alternar favorito"
            >
              {isFavorite ? (
                <FavoriteRoundedIcon color="error" />
              ) : (
                <FavoriteBorderRoundedIcon />
              )}
            </IconButton>
          </Tooltip>
        </Stack>

        <Typography variant="h6" component="h2" gutterBottom>
          {news.title || "Notícia sem título"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Por {news.author || "Autor desconhecido"}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {news.points ?? 0} pontos · {news.num_comments ?? 0} comentários
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button size="small" onClick={onOpen}>
          Ver detalhes
        </Button>
        {news.url && (
          <Button
            size="small"
            component="a"
            href={news.url}
            target="_blank"
            rel="noreferrer"
          >
            Fonte original
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
