CREATE TABLE IF NOT EXISTS order_product (
   id SERIAL PRIMARY KEY,
   quantity integer,
   order_id integer REFERENCES orders(id),
   product_id integer REFERENCES products(id)
);