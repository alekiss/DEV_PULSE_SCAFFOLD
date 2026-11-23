import { api } from "./api";

import type { NewsItemDetails, NewsSearchResponse } from "../types/news";

export const searchNews = async (
  query: string,
): Promise<NewsSearchResponse> => {
  const response = await api.get<NewsSearchResponse>("/search_by_date", {
    params: {
      query,
      tags: "story",
      hitsPerPage: 12,
    },
  });

  return response.data;
};

export const getNewsById = async (id: string): Promise<NewsItemDetails> => {
  const response = await api.get<NewsItemDetails>(`/items/${id}`);

  return response.data;
};
