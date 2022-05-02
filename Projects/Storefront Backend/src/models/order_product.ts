import client from "../database";

export type OrderProductType = {
  id?: number;
  quantity: number;
  order_id: number;
  product_id: number;
};

export class OrderProductStore {
  async addProduct(orderProd: OrderProductType): Promise<OrderProductType> {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO order_product (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *";
      const result = await conn.query(sql, [
        orderProd.quantity,
        orderProd.order_id,
        orderProd.product_id,
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could not add product ${orderProd.product_id} to order ${orderProd.order_id}. Error: ${err}`
      );
    }
  }

  async deleteAll(order_id: number): Promise<void> {
    try {
      const conn = await client.connect();
      const sql = "DELETE FROM order_product WHERE order_id = ($1)";
      await conn.query(sql, [order_id]);
      conn.release();
    } catch (err) {
      throw new Error(
        `Could not delete order details for order id: ${order_id}. Error: ${err}`
      );
    }
  }
}
