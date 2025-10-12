import { ResponseBody } from '@shared/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';

export const apiClient = {
  get: async <T>(endpoint: string, options?: RequestInit): Promise<ResponseBody<T>> => {
    console.log(`[${process.env.NEXT_RUNTIME}::apiClient] GET ${endpoint}`);

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      // next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error('API Error: ' + response.status + ' ' + response.statusText);
    }

    return response.json();
  },
  // post, put, delete 등...
};
