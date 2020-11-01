import { IProduct } from './product.interface';
import { productMock } from './product.mock';

export class ProductRepository {
  public async find(): Promise<IProduct[]> {
    return productMock;
  }

  public async findOne(id: string): Promise<IProduct> {
    const product = productMock.find((item) => item.id === id);
    return product;
  }
}
