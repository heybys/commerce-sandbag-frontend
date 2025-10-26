import { ResponseBody } from '@shared/types';

import { Cart, CartAddRequest } from '@entities/cart';

import { cart } from '@/mocks/cart/data';
import { products } from '@/mocks/product/data';
import { HttpResponse, http } from 'msw';

const handlers = [
  http.get('http://localhost:8080/api/cart', () => {
    const response: ResponseBody<Cart> = {
      status: 'SUCCESS',
      message: 'success to get cart',
      data: cart,
    };
    return HttpResponse.json(response);
  }),

  http.post('http://localhost:8080/api/cart', async ({ request }) => {
    const body = (await request.json()) as CartAddRequest;

    // 입력 값 검증
    if (!body?.productId || !body?.quantity) {
      return new Response(null, { status: 400 });
    }

    const { productId, quantity } = body;

    // 유효성 검증
    if (quantity <= 0) {
      const response: ResponseBody<Cart> = {
        status: 'FAIL',
        message: 'quantity must be greater than 0',
        cause: {
          code: '1001',
        },
      };
      return HttpResponse.json(response);
    }

    const cartItemToAdd = products.find((p) => p.id === productId);
    if (!cartItemToAdd) {
      const response: ResponseBody<Cart> = {
        status: 'FAIL',
        message: 'product not cartItemToAdd',
        cause: {
          code: '1002',
        },
      };
      return HttpResponse.json(response);
    }

    // 장바구니 담기
    const existingItem = cart.items.find((i) => i.product.id === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.updatedAt = new Date();
    } else {
      const newItem = {
        id: cart.items.length === 0 ? '1' : (Math.max(...cart.items.map((i) => Number(i.id))) + 1).toString(),
        product: cartItemToAdd,
        quantity,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      cart.items.push(newItem);
    }

    cart.totalPrice += cartItemToAdd.priceSale ?? cartItemToAdd.price;
    cart.totalQuantity += quantity;

    const response: ResponseBody<Cart> = {
      status: 'SUCCESS',
      message: 'success to add cart',
      data: cart,
    };
    return HttpResponse.json(response);
  }),
];

export default handlers;
