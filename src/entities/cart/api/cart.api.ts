import { apiClient } from '@shared/api/api-client';
import { BusinessError } from '@shared/types';

import { Cart, CartAddRequest } from '@entities/cart/types';

export const cartApi = {
  getCart: async (): Promise<Cart> => {
    try {
      const responseBody = await apiClient.get<Cart>(`/api/cart`);

      if (responseBody.status === 'SUCCESS' && responseBody.data) {
        return responseBody.data;
      }

      if (!responseBody.data) {
        throw new BusinessError('장바구니 조회에 실패하였습니다.');
      }

      throw new BusinessError(responseBody.message, responseBody.cause);
    } catch (e: unknown) {
      if (e instanceof BusinessError) throw e;
      if (e instanceof Error) throw new BusinessError(e.message);
      throw new BusinessError('Unknown Error: ' + e);
    }
  },

  addCart: async (request: CartAddRequest): Promise<Cart> => {
    try {
      const responseBody = await apiClient.post<Cart>(`/api/cart`, { body: JSON.stringify(request) });

      if (responseBody.status === 'SUCCESS' && responseBody.data) {
        return responseBody.data;
      }

      if (!responseBody.data) {
        throw new BusinessError('장바구니 담기에 실패하였습니다.');
      }

      throw new BusinessError(responseBody.message, responseBody.cause);
    } catch (e: unknown) {
      if (e instanceof BusinessError) throw e;
      if (e instanceof Error) throw new BusinessError(e.message);
      throw new BusinessError('Unknown Error: ' + e);
    }
  },
};
