import { CartAddRequest, cartApi } from '@entities/cart';

import { cartKeys } from '@features/cart';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ productId, quantity }: CartAddRequest) => {
      return cartApi.addCart({ productId, quantity });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cartKeys.getCarts }).then((r) => console.log(r));
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
