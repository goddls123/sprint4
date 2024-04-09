import { createConnection } from "mysql2";
import { DATABASE, DB_PASSWORD, DB_PORT, DB_USER, HOST } from "../settings";

const connection = createConnection({
  host: HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DATABASE,
  dateStrings: true,
  port: Number(DB_PORT),
});

export default connection;
