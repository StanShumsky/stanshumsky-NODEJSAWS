CREATE extension if NOT EXISTS "uuid-ossp";
CREATE TABLE if NOT EXISTS product (
  id uuid DEFAULT uuid_generate_v4(),
  title text not null,
  description text not null,
  imageUrl varchar(255),
  price int,
  PRIMARY KEY(id)
);
CREATE TABLE if NOT EXISTS stock (
  product_id uuid NOT NULL,
  count int DEFAULT 0 NOT NULL,
  PRIMARY KEY(product_id),
  FOREIGN KEY(product_id) REFERENCES product(id) ON DELETE CASCADE
);
