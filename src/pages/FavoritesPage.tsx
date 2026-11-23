import { Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import NewsCard from "../components/NewsCard";
import EmptyState from "../components/EmptyState";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  return (
    <Stack spacing={3}>
      <PageHeading
        eyebrow="SUA COLEÇÃO"
        title="Notícias salvas"
        description="Relembre as notícias que você decidiu guardar para ler depois."
      />
      {favorites.length === 0 ? (
        <EmptyState title="Você ainda não salvou notícias" description="Volte para a página inicial e favorite alguma notícia." />
      ) : (
        <Grid container spacing={2}>
          {favorites.map((item) => (
            <Grid key={item.objectID} size={{ xs: 12, sm: 6, md: 4 }}>
              <NewsCard
                news={item}
                isFavorite={isFavorite(item.objectID)}
                onToggleFavorite={() => toggleFavorite(item)}
                onOpen={() => navigate(`/noticia/${item.objectID}`)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
}