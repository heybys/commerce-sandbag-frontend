import React from 'react';

import { Product, ProductCard } from '@entities/product';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <h1 className="text-xl font-semibold">상품 목록</h1>
      <ul className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};
