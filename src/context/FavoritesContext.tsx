import { createContext, useContext, useState, type ReactNode } from "react";
import type { NewsHit } from "../types/news";

type FavoritesContextValue = {
  favorites: NewsHit[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (news: NewsHit) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

type FavoritesProviderProps = { children: ReactNode };

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<NewsHit[]>([]);

  const isFavorite = (id: string) =>
    favorites.some((item) => item.objectID === id);

  const toggleFavorite = (news: NewsHit) =>
    setFavorites((current) => {
      const exists = current.some((item) => item.objectID === news.objectID);
      return exists
        ? current.filter((item) => item.objectID !== news.objectID)
        : [...current, news];
    });
    
  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error(
      "useFavorites deve ser utilizado dentro de FavoritesProvider.",
    );
  return context;
}
