import { NextRequest } from 'next/server';
import type { Category, Paginated } from '@lib/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';

export async function GET(req: NextRequest) {
  console.log(`[${process.env.NEXT_RUNTIME}] ${req.url}`);

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page') ?? 1);
  const pageSize = Number(searchParams.get('pageSize') ?? 10);

  const res = await fetch(`${API_BASE_URL}/api/categories?page=${page}&pageSize=${pageSize}`);

  if (!res.ok) {
    throw new Error(`Error fetching categories: ${res.status} ${res.statusText}`);
  }

  const data: Paginated<Category> = await res.json();

  return Response.json(data);
}
