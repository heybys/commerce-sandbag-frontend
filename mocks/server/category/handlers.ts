import { http, HttpResponse } from 'msw';
import { categories } from './data';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';

export const handlers = [
  http.get(`${API_BASE_URL}/api/categories`, ({ request }) => {
    const url = new URL(request.url);

    const page = Number(url.searchParams.get('page') ?? 1);
    const pageSize = Number(url.searchParams.get('pageSize') ?? 10);

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return HttpResponse.json({
      items: categories.slice(start, end),
      page,
      pageSize,
      total: categories.length,
    });
  }),
];
