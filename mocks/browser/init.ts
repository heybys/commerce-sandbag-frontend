import { setupWorker } from 'msw/browser';
import product from '@mocks/browser/product';
import category from '@mocks/browser/category';

const worker = setupWorker(...product.handlers, ...category.handlers);

export async function initBrowserMSW() {
  await worker.start({
    onUnhandledRequest: 'warn',
    serviceWorker: { url: '/mockServiceWorker.js' },
  });

  console.info('[MSW] Browser mocking enabled');
}
