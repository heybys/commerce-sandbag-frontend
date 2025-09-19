export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';

export async function apiGet<T>(path: string, init?: RequestInit): Promise<Awaited<T> | null> {
  const res = await fetch(`${API_BASE_URL}${path}`, init);
  if (!res.ok) {
    return null;
    // throw new Error(`Error fetching ${path}: ${res.status} ${res.statusText}`);
  }
  return await res.json();
}
