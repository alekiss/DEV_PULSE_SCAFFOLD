export type NewsHit = {
  objectID: string;
  title?: string | null;
  url?: string | null;
  author?: string;
  points?: number | null;
  num_comments?: number | null;
  created_at?: string;
};

export type NewsSearchResponse = {
  hits: NewsHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  query: string;
};

export type NewsComment = {
  id: number;
  author?: string;
  text?: string | null;
  created_at?: string;
};

export type NewsItemDetails = {
  id: number;
  title?: string | null;
  url?: string | null;
  author?: string;
  points?: number | null;
  created_at?: string;
  text?: string | null;
  children?: NewsComment[];
};
