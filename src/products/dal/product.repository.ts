import { Client } from 'pg';
import { POSTGRES_DB_CONFIG } from '../../utils/constants';
import { IProduct } from '../product.interface';

export class ProductRepository {
  public async find(): Promise<IProduct[]> {
    const client = new Client(POSTGRES_DB_CONFIG);
    try {
      await client.connect();
      const { rows } = await client.query<IProduct>(
        `SELECT id, title, description, imageUrl, price, count FROM product INNER JOIN stock ON product.id = stock.product_id`
      );
      return rows;
    } finally {
      client.end();
    }
  }

  public async findOne(id: string): Promise<IProduct> {
    const client = new Client(POSTGRES_DB_CONFIG);

    try {
      await client.connect();
      const { rows } = await client.query<IProduct>(
        `SELECT id, title, description, imageUrl, price, count FROM product INNER JOIN stock ON stock.product_id = product.id WHERE id=$1`,
        [id]
      );
      return rows[0];
    } finally {
      client.end();
    }
  }

  public async create(body: Partial<IProduct>): Promise<IProduct> {
    const client = new Client(POSTGRES_DB_CONFIG);

    try {
      await client.connect();
      await client.query('BEGIN');

      try {
        const { rows } = await client.query<IProduct>(
          `WITH product_result AS (
            INSERT INTO product (title, description, imageUrl, price)
            VALUES ($1, $2, $3, $4)
            RETURNING *
          ), stock_result AS (
            INSERT INTO stock (product_id, count)
            SELECT id, $5
            FROM product_result
            RETURNING *
          )
          SELECT id, title, description, imageUrl, price, count
          FROM product_result, stock_result`,
          [body.title, body.description, body.imageUrl, body.price, body.count]
        );
        await client.query('COMMIT');
        return rows[0];
      } catch (error) {
        client.query('ROLLBACK');
        throw error;
      }
    } finally {
      client.end();
    }
  }
}
