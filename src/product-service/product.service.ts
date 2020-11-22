import { IProduct } from '@nodejsaws/shared';
import { ProductRepository } from './dal/product.repository';

export class ProcutsService {
  constructor(private repository: ProductRepository) {}

  public async find(): Promise<IProduct[]> {
    const entities = await this.repository.find();
    return entities;
  }

  public async findOne(id: string): Promise<IProduct> {
    const entity = await this.repository.findOne(id);
    return entity;
  }

  public async create(body: Partial<IProduct>): Promise<IProduct> {
    const entity = await this.repository.create({
      ...body,
      imageUrl: 'http://placeimg.com/640/480',
    });
    return entity;
  }
}

export const productService = new ProcutsService(new ProductRepository());
