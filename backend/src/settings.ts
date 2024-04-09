import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT || 3031;
export const CORS_ALLOWED_ORIGIN = process.env.CORS_ALLOWED_ORIGIN || "";

export const HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DATABASE = process.env.DATABASE;
export const DB_PASSWORD = process.env.DB_PASS;
export const DB_PORT = process.env.DB_PORT;
