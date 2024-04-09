import { createConnection } from "mysql2";
import { DATABASE, DB_PASSWORD, DB_USER, HOST } from "../settings";

const connection = createConnection({
  host: HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DATABASE,
});

export default connection;
