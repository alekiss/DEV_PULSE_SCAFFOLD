import { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageHeading from "../components/PageHeading";
import SearchBar from "../components/SearchBar";
import NewsCard from "../components/NewsCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";

import { searchNews } from "../services/newsService";
import { useFavorites } from "../context/FavoritesContext";
import type { NewsHit } from "../types/news";

export default function HomePage() {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [searchInput, setSearchInput] = useState("AI agents");
  const [searchTerm, setSearchTerm] = useState("AI agents");
  const [news, setNews] = useState<NewsHit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchNews();

  }, [searchTerm]);

      const fetchNews = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await searchNews(searchTerm);
        setNews(response.hits);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

  const handleSearch = () => {
    const normalizedTerm = searchInput.trim();
    if (normalizedTerm) setSearchTerm(normalizedTerm);
  };

  return (
    <Stack spacing={3}>
      <PageHeading
        eyebrow="TECH RADAR · 2026"
        title="O que está acontecendo no mundo da tecnologia?"
        description="Explore notícias e discussões sobre inteligência artificial, agentes, ferramentas e desenvolvimento de software."
      />

      <SearchBar
        value={searchInput}
        onChange={setSearchInput}
        onSearch={handleSearch}
        loading={loading}
      />

      {loading && <LoadingState />}
      {error && <ErrorState />}
      {!loading && !error && news.length === 0 && (
        <EmptyState
          title="Nenhuma notícia encontrada"
          description="Tente pesquisar outro assunto."
        />
      )}

      {!loading && !error && news.length > 0 && (
        <Grid container spacing={2}>
          {news.map((item) => (
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
