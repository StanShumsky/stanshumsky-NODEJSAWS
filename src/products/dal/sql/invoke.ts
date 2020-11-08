import { Client } from 'pg';
import { POSTGRES_DB_CONFIG } from 'src/utils/constants';

export async function invoke(): Promise<void> {
  const client = new Client(POSTGRES_DB_CONFIG);
  await client.connect();

  try {
    await client.query(`DROP TABLE product, stock IF EXISTS`);
    await client.query(`CREATE extension if NOT EXISTS "uuid-ossp"`);
    await client.query(`CREATE TABLE if NOT EXISTS product (
      id uuid DEFAULT uuid_generate_v4() NOT NULL,
      title varchar(255) NOT NULL,
      description varchar(2083),
      imageUrl varchar(255),
      price int,
      PRIMARY KEY(id)
    )`);
    await client.query(`CREATE TABLE if NOT EXISTS stock (
      product_id uuid NOT NULL,
      count int DEFAULT 0 NOT NULL,
      PRIMARY KEY(product_id),
      FOREIGN KEY(product_id) REFERENCES product(id) ON DELETE CASCADE
    )`);
    await client.query(`WITH product_result AS (
      INSERT INTO product (title, description, imageUrl, price)
      VALUES (
          'Sleek Steel Shirt',
          'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
          'http://placeimg.com/640/480',
          483
        ),
        (
          'Handmade Frozen Chips',
          'The beautiful range of Apple Natural� that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
          'http://placeimg.com/640/480',
          837
        ),
        (
          'Handmade Fresh Bike',
          'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
          'http://placeimg.com/640/48',
          781
        ),
        (
          'Sleek Wooden Hat',
          'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
          'http://placeimg.com/640/480',
          255
        ),
        (
          'Generic Metal Shirt',
          'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
          'http://placeimg.com/640/480',
          159
        ),
        (
          'Fantastic Plastic Chair',
          'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
          'http://placeimg.com/640/480',
          271
          )
          RETURNING *
        ),
        stock_result AS (
          INSERT INTO stock (product_id, count)
          SELECT id,
            random() * 9 + 1
          FROM product_result
          RETURNING *
        )
      SELECT id,
        title,
        description,
        imageUrl,
        price,
        count
      FROM product_result,
        stock_result`);
  } catch (err) {
    console.error('Error during database request executing:', err);
  } finally {
    client.end();
  }
}
