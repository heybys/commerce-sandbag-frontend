export type Product = {
  id: string;
  name: string;
  price: number;
  priceSale?: number;
  category: Category;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  tags: string[];
};

export type Category = {
  id: string;
  name: string;
};
