import 'server-only';

import productHandlers from '@/mocks/product/handlers';
import { setupServer } from 'msw/node';

export let mswInitialized = false;

export const server = setupServer(...productHandlers);
