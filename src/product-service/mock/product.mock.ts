import * as faker from 'faker';
import { IProduct } from '../product.interface';

export function mockProduct(body: Partial<IProduct> = {}): IProduct {
  return {
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    imageUrl: faker.image.imageUrl(),
    count: faker.random.number(),
    ...body,
  };
}
