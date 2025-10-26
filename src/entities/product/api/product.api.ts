import { apiClient } from '@shared/api/api-client';
import { BusinessError, Paginated } from '@shared/types';

import { Product } from '@entities/product';

export const productApi = {
  getProductById: async (id: string): Promise<Product> => {
    try {
      const responseBody = await apiClient.get<Product>(`/api/products/${id}`);

      if (responseBody.status === 'SUCCESS' && responseBody.data) {
        return responseBody.data;
      }

      if (!responseBody.data) {
        throw new BusinessError('상품 정보 조회에 실패하였습니다.');
      }

      if (responseBody.cause?.productId) {
        throw new BusinessError(`상품(${responseBody.cause.productId}) 정보 조회에 실패하였습니다.`);
      }

      throw new BusinessError(responseBody.message, responseBody.cause);
    } catch (e: unknown) {
      if (e instanceof BusinessError) throw e;
      if (e instanceof Error) throw new BusinessError(e.message);
      throw new BusinessError('Unknown Error: ' + e);
    }
  },
  getProducts: async (page: number = 1, pageSize: number = 20): Promise<Paginated<Product>> => {
    try {
      const responseBody = await apiClient.get<Paginated<Product>>(`/api/products?page=${page}&pageSize=${pageSize}`);

      if (responseBody.status === 'SUCCESS' && responseBody.data) {
        return responseBody.data;
      }

      if (!responseBody.data) {
        throw new BusinessError('상품 목록 조회에 실패하였습니다.');
      }

      throw new BusinessError(responseBody.message, responseBody.cause);
    } catch (e: unknown) {
      if (e instanceof BusinessError) throw e;
      if (e instanceof Error) throw new BusinessError(e.message);
      throw new BusinessError('Unknown Error: ' + e);
    }
  },
  // checkStock: async (productId: string): Promise<{ available: number; maxAvailable: number }> => {
  //   return new Promise((resolve) => ({ available: 30, maxAvailable: 10 }));
  // },
};
