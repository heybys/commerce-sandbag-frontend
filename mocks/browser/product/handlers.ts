import { http, HttpResponse } from 'msw';
import { data } from './data';

export const handlers = [
  http.get(`/api/products/:id`, ({ params }) => {
    const item = data.find((p) => p.id === params.id);

    if (item) {
      return HttpResponse.json(item);
    }

    return new HttpResponse(null, { status: 404 });
  }),

  http.get(`/api/products`, ({ request }) => {
    const url = new URL(request.url);

    const page = Number(url.searchParams.get('page') ?? 1);
    const pageSize = Number(url.searchParams.get('pageSize') ?? 10);

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return HttpResponse.json({
      items: data.slice(start, end),
      page,
      pageSize,
      total: data.length,
    });
  }),
];
