import { http, HttpResponse } from 'msw';
import { categories } from '@mocks/data';

export const categoriesHandlers = [
  http.get('/api/categories', () => {
    return HttpResponse.json({ items: categories });
  }),
];
