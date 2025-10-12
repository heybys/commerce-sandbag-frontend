import productHandlers from '@mocks/product/handlers';
import { setupServer } from 'msw/node';
import 'server-only';

export const server = setupServer(...productHandlers);
