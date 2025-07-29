export interface ProductResponse {
  pos?: number;
  url?: string;
  asin?: string;
  price?: number;
  title?: string;
  rating?: number;
  currency?: string;
  is_prime?: boolean;
  url_image?: string
  best_seller?: boolean
  price_upper?: number;
  is_sponsored?: boolean;
  manufacturer?: string;
  sales_volume?: string;
  pricing_count?: number;
  reviews_count?: number;
  is_amazons_choice?: boolean;
  price_strikethrough?: number;
  shipping_information?: string;
}

export interface ScrapingResult {
  paid: ProductResponse[];
  organic: ProductResponse[];
  suggested: ProductResponse[];
  amazons_choices: ProductResponse[];
}

export interface Result {
  last_visible_page: number;
  page: number;
  parse_status_code: number;
  query: string;
  results: ScrapingResult;
}

export interface ScrapingContent {
  errors: [];
  results: Result;
  status_code: number;
  task_id: number;
}

export interface SearchResult {
  url: string;
  page: string;
  query: string;
  status_code: number;
  content: ScrapingContent;
  last_visible_page: number;
  task_id: number;
}

export interface ScrapingResponse {
  results: SearchResult[];
}