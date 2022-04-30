import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// middleware
const verifyAuthToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader: string | undefined = req.headers.authorization;
    const token = (authHeader as string).split(" ")[1];
    const decoded: string | object = jwt.verify(
      token,
      process.env.TOKEN_SECRET as string
    );

    res.locals.userData = decoded;
    next(); // !IMPORTANT
  } catch (error) {
    res.status(401);
    next();
  }
};

export default verifyAuthToken;
