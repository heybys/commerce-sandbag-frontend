import type { Product, Category } from '@/lib/types';

export const categories: Category[] = [
  { id: 'c1', name: '스킨케어' },
  { id: 'c2', name: '클렌징' },
  { id: 'c3', name: '메이크업' },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: '올리브영 모이스처 크림 100ml',
    price: 18000,
    priceSale: 12900,
    imageUrl: '/images/p1.jpg',
    rating: 4.6,
    reviewCount: 3521,
    tags: ['베스트', '세일'],
  },
  {
    id: 'p2',
    name: '순한 클렌징폼 150ml',
    price: 9000,
    imageUrl: '/images/p2.jpg',
    rating: 4.4,
    reviewCount: 1287,
    tags: ['신상품'],
  },
];
