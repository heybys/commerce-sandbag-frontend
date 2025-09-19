import { http, HttpResponse } from 'msw';
import { categories } from './data';

export const handlers = [
  http.get('/api/categories', () => {
    return HttpResponse.json({ items: categories });
  }),
];
