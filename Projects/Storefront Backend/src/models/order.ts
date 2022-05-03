import { PoolClient, QueryResult } from "pg";
import client from "../database";

export type OrderType = {
  id?: number;
  user_id: number;
  status: string;
};

export class Order {
  async create(order: OrderType): Promise<OrderType> {
    try {
      const { user_id, status } = order;

      const conn = await client.connect();
      const sql = `INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *`;
      const result = await conn.query(sql, [user_id, status]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Couldn't create order, ${err}`);
    }
  }

  // get completed orders based on status
  async getCompletedOrders(): Promise<OrderType[]> {
    try {
      const conn: PoolClient = await client.connect();
      const sql: string = "SELECT * FROM orders WHERE status LIKE 'comp%'";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Couldn't get the orders, ${err}`);
    }
  }
  // get current orders based on status
  async getCurrentOrders(): Promise<OrderType[]> {
    try {
      const conn: PoolClient = await client.connect();
      const sql: string = "SELECT * FROM orders WHERE status LIKE 'curr%'";
      const result = await conn.query(sql);
      conn.release();
      console.log("ROWS:", result.rows);
      return result.rows;
    } catch (err) {
      throw new Error(`Couldn't get the orders, ${err}`);
    }
  }

  // get orders based on order_id (id)
  async show(id: number): Promise<OrderType[]> {
    try {
      const sql: string = "SELECT * FROM orders WHERE id=($1)";
      const conn: PoolClient = await client.connect();
      const result: QueryResult = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Couldn't find orders for user: ${id}, ${err}`);
    }
  }

  // get all orders
  async index(): Promise<OrderType[]> {
    try {
      const sql: string = "SELECT * FROM orders";
      const conn: PoolClient = await client.connect();
      const result: QueryResult = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Couldn't find orders, ${err}`);
    }
  }
}
