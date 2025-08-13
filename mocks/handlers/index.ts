import { HttpHandler } from 'msw';
import { productsHandlers } from './products-handlers';
import { categoriesHandlers } from './categories-handlers';

export const handlers: HttpHandler[] = [...productsHandlers, ...categoriesHandlers];
