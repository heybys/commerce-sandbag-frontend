import { HTMLAttributes } from 'react';

import { Product } from '@entities/product';

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-lg border p-3 w-fit">
      {/* Next/Image 권장: 나중에 교체해도 유지보수 쉬움 */}
      <img src={product.imageUrl} alt={product.name} className="aspect-square object-cover rounded" />
      <div className="mt-2 text-sm line-clamp-2">{product.name}</div>
      <div className="mt-1 font-semibold">
        {product.priceSale ? (
          <>
            <span className="text-primary">{product.priceSale?.toLocaleString()}원</span>
            <span className="ml-2 line-through text-muted-foreground text-xs">{product.price?.toLocaleString()}원</span>
          </>
        ) : (
          <span>{product.price?.toLocaleString()}원</span>
        )}
      </div>
    </div>
  );
};
