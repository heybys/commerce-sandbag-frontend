import Image from 'next/image';
import { HTMLAttributes } from 'react';

import { Product } from '@entities/product';

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-lg border p-3 w-fit">
      <div className="relative w-[300p] h-[300px] aspect-square">
        <Image src={product.imageUrl} alt={product.name} fill className="object-cover rounded" />
      </div>
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
