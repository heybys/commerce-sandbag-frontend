import { products } from '@mocks/data';

export const dynamic = 'force-dynamic';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const item = products.find((p) => p.id === params.id);
  if (!item) {
    return new Response('Not Found', { status: 404 });
  }
  return Response.json(item);
}
