import { apiGet } from '@lib/api/client';
import type { Paginated, Product } from '@lib/types';

export default async function HomePage() {
  const data = await apiGet<Paginated<Product>>('/api/products?page=1&pageSize=10');

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">베스트 상품</h1>
      <ul className="grid grid-cols-2 gap-3">
        {data.items.map((p) => (
          <li key={p.id} className="rounded-lg border p-3">
            {/* Next/Image 권장: 나중에 교체해도 유지보수 쉬움 */}
            <img src={p.imageUrl} alt={p.name} className="aspect-square object-cover rounded" />
            <div className="mt-2 text-sm line-clamp-2">{p.name}</div>
            <div className="mt-1 font-semibold">
              {p.priceSale ? (
                <>
                  <span className="text-primary">{p.priceSale.toLocaleString()}원</span>
                  <span className="ml-2 line-through text-muted-foreground text-xs">{p.price.toLocaleString()}원</span>
                </>
              ) : (
                <span>{p.price.toLocaleString()}원</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
