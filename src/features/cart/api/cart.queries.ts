import { cartApi } from '@entities/cart/api';

import { cartKeys } from '@features/cart/types';

import { queryOptions } from '@tanstack/react-query';

export const cartQueries = {
  getCarts: () =>
    queryOptions({
      queryKey: cartKeys.getCarts,
      queryFn: () => cartApi.getCart(),
      staleTime: 1000 * 10,
      gcTime: 1000 * 60 * 3,
    }),
};
