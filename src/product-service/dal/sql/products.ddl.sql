WITH product_result AS (
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
  stock_result;
