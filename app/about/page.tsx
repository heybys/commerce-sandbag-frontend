import { BusinessError } from '@shared/types';

import { ProductCard, ProductList, productApi } from '@entities/product';

export default async function AboutPage() {
  let mainProduct;
  let errorMessage;
  let paginatedProducts;
  let errorMessage2;

  try {
    mainProduct = await productApi.getProductById('1');
  } catch (e: unknown) {
    errorMessage = (e as BusinessError).message;
  }
  try {
    paginatedProducts = await productApi.getProducts(1, 20);
  } catch (e: unknown) {
    errorMessage2 = (e as BusinessError).message;
  }

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">대표 상품</h1>
      {mainProduct ? <ProductCard product={mainProduct} /> : <div>{errorMessage}</div>}
      {paginatedProducts ? <ProductList products={paginatedProducts.items} /> : <div>{errorMessage2}</div>}
    </main>
  );
}
