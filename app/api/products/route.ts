import { NextRequest } from 'next/server';
import { products } from '@mocks/data';
import type { Paginated, Product } from '@/lib/types';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page') ?? 1);
  const pageSize = Number(searchParams.get('pageSize') ?? 20);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const data: Paginated<Product> = {
    items: products.slice(start, end),
    page,
    pageSize,
    total: products.length,
  };

  return Response.json(data);
}
