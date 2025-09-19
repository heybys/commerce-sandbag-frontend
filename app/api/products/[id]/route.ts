import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await (params as unknown as Promise<{ id: string }>);
  console.log(`[${process.env.NEXT_RUNTIME}] ${req.url}`);

  const res = await fetch(`${API_BASE_URL}/api/products/${id}`);

  if (!res.ok) {
    if (res.status >= 400 && res.status < 500) {
      const errorMessage = (await res.text()) || 'Bad request';
      return Response.json({ error: errorMessage }, { status: res.status });
    }
    return Response.json({ error: 'Server error' }, { status: res.status });
  }

  const data = await res.json();
  return Response.json(data);
}
