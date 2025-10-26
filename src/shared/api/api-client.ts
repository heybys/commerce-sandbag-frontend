import { ResponseBody } from '@shared/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';

export const apiClient = {
  before: async () => {
    if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.NODE_ENV === 'development') {
      const { server } = await import('@/mocks/server');
      let { mswInitialized } = await import('@/mocks/server');

      if (mswInitialized) {
        console.log('hello');
        return;
      }
      server.listen({ onUnhandledRequest: 'warn' });
      mswInitialized = true;

      console.log('\x1b[32m ✓ \x1b[0m\x1b[33m[MSW]\x1b[0m Server mocking re-enabled (Node runtime)');
    }
  },
  get: async <T>(endpoint: string, options?: RequestInit): Promise<ResponseBody<T>> => {
    await apiClient.before();

    console.log(`[${process.env.NEXT_RUNTIME}::apiClient] GET ${endpoint}`);

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('API Error: ' + response.status + ' ' + response.statusText);
    }

    return response.json();
  },
  post: async <T>(endpoint: string, options?: RequestInit): Promise<ResponseBody<T>> => {
    await apiClient.before();

    console.log(`[${process.env.NEXT_RUNTIME}::apiClient] POST ${endpoint}`);

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('API Error: ' + response.status + ' ' + response.statusText);
    }

    return response.json();
  },
  put: async <T>(endpoint: string, options?: RequestInit): Promise<ResponseBody<T>> => {
    await apiClient.before();

    console.log(`[${process.env.NEXT_RUNTIME}::apiClient] PUT ${endpoint}`);

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
      method: 'PUT',
    });

    if (!response.ok) {
      throw new Error('API Error: ' + response.status + ' ' + response.statusText);
    }

    return response.json();
  },
  delete: async <T>(endpoint: string, options?: RequestInit): Promise<ResponseBody<T>> => {
    await apiClient.before();

    console.log(`[${process.env.NEXT_RUNTIME}::apiClient] DELETE ${endpoint}`);

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('API Error: ' + response.status + ' ' + response.statusText);
    }

    return response.json();
  },
};
