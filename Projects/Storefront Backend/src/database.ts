import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config(); // // initialize the environment variables

// getting the information needed to connect to the database
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  ENV,
} = process.env;

console.log(ENV);

let client: Pool = new Pool({
  host: POSTGRES_HOST,
  database: ENV === "dev" ? POSTGRES_DB : POSTGRES_TEST_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

export default client;
