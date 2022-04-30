import { PoolClient, QueryResult } from "pg";
import client from "../database";

export type OrderType = {
  id?: number;
  status: string;
  user_id: number;
};

export class Order {
  async index(): Promise<OrderType[]> {
    try {
      const conn: PoolClient = await client.connect();
      const sql: string = "SELECT * FROM orders";
      const result: QueryResult = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Couldn't get the orders, ${err}`);
    }
  }

  async show(id: number): Promise<OrderType> {
    try {
      const sql: string = "SELECT * FROM orders WHERE id=($1)";
      const conn: PoolClient = await client.connect();
      const result: QueryResult = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Couldn't find order ${id}, ${err}`);
    }
  }
}
