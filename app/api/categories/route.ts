import { categories } from '@mocks/data';

export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({ items: categories });
}
