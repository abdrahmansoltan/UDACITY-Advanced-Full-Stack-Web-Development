import { PoolClient, QueryResult } from "pg";
import client from "../database";
const bcrypt = require("bcrypt");

export type UserType = {
  id?: number;
  first_name: string;
  last_name: string;
  password: string;
};

export class User {
  async index(): Promise<UserType[]> {
    try {
      const conn: PoolClient = await client.connect();
      const sql = "SELECT * FROM users";
      const result: QueryResult = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Couldn't get users, ${err}`);
    }
  }

  async show(id: number): Promise<UserType> {
    try {
      const sql = "SELECT * FROM users WHERE id=($1)";
      const conn: PoolClient = await client.connect();
      const result: QueryResult = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Couldn't find user ${id}, ${err}`);
    }
  }

  async create(u: UserType): Promise<UserType> {
    try {
      const conn: PoolClient = await client.connect();
      const sql =
        "INSERT INTO users (first_name,last_name, password) VALUES($1, $2, $3) RETURNING *";

      // PASSWORD HASHING
      const hash = bcrypt.hashSync(
        u.password + process.env.pepper,
        Number(process.env.saltRounds)
      );
      const result: QueryResult = await conn.query(sql, [
        u.first_name,
        u.last_name,
        hash,
      ]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(
        `Couldn't create user (${u.first_name} ${u.last_name}) ${err}`
      );
    }
  }

  async deleteProduct(id: number): Promise<UserType> {
    try {
      const sql: string = `DELETE FROM users WHERE id=$1`;
      const conn: PoolClient = await client.connect();
      const result: QueryResult = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Couldn't delete user ${id}, ${err}`);
    }
  }
}
