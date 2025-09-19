import { NextRequest } from 'next/server';
import type { Paginated, Product } from '@/lib/types';

export const dynamic = 'force-dynamic';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';

export async function GET(req: NextRequest) {
  console.log(`[${process.env.NEXT_RUNTIME}] ${req.url}`);

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page') ?? 1);
  const pageSize = Number(searchParams.get('pageSize') ?? 10);

  const res = await fetch(`${API_BASE_URL}/api/products?page=${page}&pageSize=${pageSize}`);

  if (!res.ok) {
    throw new Error(`Error fetching products: ${res.status} ${res.statusText}`);
  }

  const data: Paginated<Product> = await res.json();

  return Response.json(data);
}
