import { http, HttpResponse } from 'msw';
import { products } from '@mocks/data';

export const productsHandlers = [
  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') ?? 1);
    const pageSize = Number(url.searchParams.get('pageSize') ?? 20);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return HttpResponse.json({
      items: products.slice(start, end),
      page,
      pageSize,
      total: products.length,
    });
  }),

  http.get('/api/products/:id', ({ params }) => {
    const item = products.find((p) => p.id === params.id);
    return item ? HttpResponse.json(item) : new HttpResponse(null, { status: 404 });
  }),
];
