import express, { Request, Response } from "express";
import verifyAuthToken from "../helpers/tokenAuth";
import { User, UserType } from "../models/user";
import jwt from "jsonwebtoken";

const UserStore = new User();

// ---------CRUD functions--------- //

// Get all users
const index = async (req: Request, res: Response) => {
  try {
    const users: UserType[] = await UserStore.index();
    res.json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Get user by id
const show = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.id);
    const user: UserType = await UserStore.show(userId);
    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Create user
const create = async (req: Request, res: Response) => {
  try {
    // get user data from the request
    const user: UserType = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password,
    };

    // create user
    try {
      const newUser = await UserStore.create(user);
      console.log(newUser);

      const token = jwt.sign(
        { user: newUser },
        process.env.TOKEN_SECRET as string
      );
      res.json(token);
    } catch (err) {
      res.status(400);
      const error = err as string;
      res.json(error + user);
    }

    res.json("new user's data");
  } catch (err) {
    res.status(400); // Bad Request
    res.json(err);
  }
};

// each route use one model
const usersRoutes = (app: express.Application) => {
  // using the middleware function to Validate the user's token to Authorize him to the next action
  app.get("/users", verifyAuthToken, index);
  app.get("/users/:id", verifyAuthToken, show);
  app.post("/users", create);
};

export default usersRoutes; // to be used in the server file to have clean code
