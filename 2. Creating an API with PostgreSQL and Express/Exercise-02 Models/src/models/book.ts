// @ts-ignore
import Client from "../database";

// type of book-class(table)
export type Book = {
  id: number;
  title: string;
  author: string;
  totalPages: number;
  summary: string;
};

// the book-class(table)
export class BookStore {
  // async function that gets a list of all items in the DATABASE
  async index(): Promise<Book[]> {
    // it's asynchronous as all calls to DATABASE will be promises
    try {
      // @ts-ignore
      const conn = await Client.connect(); // open a connection with DATABASE

      // write SQL query command
      const sql = "SELECT * FROM books";

      // store the result of the query
      const result = await conn.query(sql);

      // close the connection with DATABASE (IMPORTANT)
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get books. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Book> {
    try {
      const sql = "SELECT * FROM books WHERE id=($1)";
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find book ${id}. Error: ${err}`);
    }
  }

  async create(b: Book): Promise<Book> {
    try {
      const sql =
        "INSERT INTO books (title, author, total_pages, summary) VALUES($1, $2, $3, $4) RETURNING *";
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [
        b.title,
        b.author,
        b.totalPages,
        b.summary,
      ]);

      const book = result.rows[0];

      conn.release();

      return book;
    } catch (err) {
      throw new Error(`Could not add new book ${b.title}. Error: ${err}`);
    }
  }

  async delete(id: string): Promise<Book> {
    try {
      const sql = "DELETE FROM books WHERE id=($1)";
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      const book = result.rows[0];

      conn.release();

      return book;
    } catch (err) {
      throw new Error(`Could not delete book ${id}. Error: ${err}`);
    }
  }
}
