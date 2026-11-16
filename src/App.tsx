import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { FavoritesProvider } from "./context/FavoritesContext";
import { AppThemeProvider } from "./context/ThemeContext";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import NewsDetailsPage from "./pages/NewsDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <AppThemeProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/noticia/:id" element={<NewsDetailsPage />} />
              <Route path="/salvos" element={<FavoritesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </AppThemeProvider>
  );
}
