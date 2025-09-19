import 'server-only';
import { setupServer } from 'msw/node';
import product from '@mocks/server/product';
import category from '@mocks/server/category';

const server = setupServer(...product.handlers, ...category.handlers);

export function initServerMSW() {
  server.listen({ onUnhandledRequest: 'warn' });
  console.log('\x1b[32m ✓ \x1b[0m\x1b[33m[MSW]\x1b[0m Server mocking enabled (Node runtime)');
}
