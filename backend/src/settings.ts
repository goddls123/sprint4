import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT || 8888;
export const CORS_ALLOWED_ORIGIN = process.env.CORS_ALLOWED_ORIGIN || "";

export const HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DATABASE = process.env.DATABASE;
export const DB_PASSWORD = process.env.DB_PASS;
export const DB_PORT = process.env.DB_PORT;
export const corsOptions = {
  origin: CORS_ALLOWED_ORIGIN, // 요청을 허용할 도메인 지정, 프론트엔드 개발 서버
  credentials: true,
};
