import express, { Request, Response } from "express";
import verifyAuthToken from "../helpers/tokenAuth";
// TODO: import order-class from the model

// ---------CRUD functions--------- //

// Get current order by user id
const show = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.user_id);
  // TODO: get current order
  res.json("current order");
};

// Get all completed orders by user id
const index = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.user_id);
  // TODO: get completed orders
  res.json("current order");
};

// each route use one model
const ordersRoutes = (app: express.Application) => {
  // using the middleware function to Validate the order's token to Authorize him to the next action
  app.get("/orders/current/:id", verifyAuthToken, show);
  app.get("/orders/completed/:id", verifyAuthToken, index);
};

export default ordersRoutes; // to be used in the server file to have clean code
