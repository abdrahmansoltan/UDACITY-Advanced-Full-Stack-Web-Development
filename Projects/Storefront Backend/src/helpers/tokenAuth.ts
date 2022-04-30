import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// middleware
const verifyAuthToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader: string | undefined = req.headers.authorization;
    if (!authHeader) {
      throw new Error("authorization header is not available"); // Guard clause
    }

    const token = (authHeader as string).split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET as string);
    next(); // !IMPORTANT
  } catch (error) {
    res.status(401).json(error);
  }
};

export default verifyAuthToken;
