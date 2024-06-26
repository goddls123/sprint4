export interface User {
  email: string | null;
  password: string | null;
}

export interface DBUser extends User {
  id: number;
  password: string;
}
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import conn from "../utils/mysql";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

export const join = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password);
  const bcryptSaltRounds: number = 10;
  const salt = await bcrypt.genSalt(bcryptSaltRounds);
  const hashPassword = await bcrypt.hash(password, salt);

  const values = [email, hashPassword];
  let sql = "INSERT INTO users (email,password) VALUES (?,?)";

  conn.query(sql, values, (err, results: ResultSetHeader) => {
    console.log(err, results);
    if (err && err.code === "ER_DUP_ENTRY") {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: "이미 가입된 이메일입니다." });
    }
    if (results.affectedRows) {
      return res.status(StatusCodes.CREATED).json(results);
    }
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";
  try {
    const [rows] = await conn.promise().query(sql, [email]);
    if (Array.isArray(rows) && rows.length) {
      const loginUser = rows[0] as RowDataPacket; //첫번째 결과를 가져옴
      const hashPassword = loginUser.password;
      const userId = loginUser.id;
      const isPasswordValid = await bcrypt.compare(password, hashPassword);
      if (isPasswordValid) {
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) {
          console.error("환경 변수 JWT_SECRET가 설정되지 않았습니다.");
          process.exit(1);
        }

        const accessToken = jwt.sign({ email, userId }, JWT_SECRET, {
          expiresIn: "14d",
        });
        res.cookie("access-token", accessToken, {
          maxAge: 1000 * 60 * 60 * 24 * 14,
          httpOnly: true,
          sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
          secure: process.env.NODE_ENV !== "development",
        });
        console.log("loginUser: ", loginUser);

        return res.status(StatusCodes.OK).json({
          id: loginUser.id,
          email: loginUser.email,
          token: accessToken,
        });
      } else {
        return res
          .status(StatusCodes.CONFLICT)
          .json({ message: "비밀번호가 일치하지 않습니다." });
      }
    } else {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: "사용자를 찾을 수 없습니다." });
    }
  } catch (error) {
    console.error("로그인 오류 : ", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("access-token");
  return res.status(StatusCodes.OK).json({ message: "로그아웃 되었습니다." });
};
