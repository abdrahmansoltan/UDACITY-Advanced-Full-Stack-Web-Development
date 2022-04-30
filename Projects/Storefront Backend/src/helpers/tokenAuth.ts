import express, { Request, Response } from "express";
// TODO: import JWT

// middleware
const verifyAuthToken = (req: Request, res: Response, next: Function): void => {
  try {
    const authHeader = req.headers.authorization;
    const token = (authHeader as string).split(" ")[1];
    //TODO: const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    next(); // !IMPORTANT
  } catch (error) {
    res.status(401);
  }
};

export default verifyAuthToken;
