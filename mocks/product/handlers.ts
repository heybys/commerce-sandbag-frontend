import { Paginated, ResponseBody } from '@shared/types';

import { Product } from '@entities/product';

import { products } from './data';
import { HttpResponse, http } from 'msw';

const handlers = [
  http.get(`http://localhost:8080/api/products`, ({ request }) => {
    const url = new URL(request.url);

    const page = Number(url.searchParams.get('page') ?? 1);
    const pageSize = Number(url.searchParams.get('pageSize') ?? 20);

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    if (start >= products.length) {
      const response: ResponseBody<Paginated<Product>> = {
        status: 'FAIL',
        message: 'failed to retrieve product',
        cause: {
          code: '1000',
        },
      };
      return HttpResponse.json(response);
    }

    const response: ResponseBody<Paginated<Product>> = {
      status: 'SUCCESS',
      message: 'success to retrieve product',
      data: {
        items: products.slice(start, end),
        page,
        pageSize,
        total: products.length,
      },
    };
    return HttpResponse.json(response);
  }),

  http.get(`http://localhost:8080/api/products/:id`, ({ params }) => {
    const item = products.find((p) => p.id === params.id);

    if (item) {
      const response: ResponseBody<Product> = {
        status: 'SUCCESS',
        message: '',
        data: item,
      };
      return HttpResponse.json(response);
    }

    return new HttpResponse(null, { status: 404 });
  }),
];

export default handlers;
