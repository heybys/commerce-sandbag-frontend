export type Product = {
  id: string;
  name: string;
  price: number;
  priceSale?: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  tags: string[];
};

export type Category = {
  id: string;
  name: string;
};

export type Paginated<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
};
