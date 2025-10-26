import { Product } from '@entities/product';

export type Cart = {
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number;
};

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CartAddRequest = {
  productId: string;
  quantity: number;
};
