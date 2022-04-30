import express, { Request, Response } from "express";
import verifyAuthToken from "../helpers/tokenAuth";
// TODO: import user-class from the model

// ---------CRUD functions--------- //

// Get all users
const index = async (req: Request, res: Response) => {
  // TODO: get all users
  res.json("all users");
};

// Get user by id
const show = async (req: Request, res: Response) => {
  // TODO: get specified article
  res.json("selected user");
};

// Create user
const create = async (req: Request, res: Response) => {
  try {
    // TODO: get user data from the request

    // TODO: create user

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
  app.post("/users", verifyAuthToken, create);
};

export default usersRoutes; // to be used in the server file to have clean code
