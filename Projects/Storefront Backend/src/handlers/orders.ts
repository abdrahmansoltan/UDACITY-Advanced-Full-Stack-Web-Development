import express, { Request, Response } from "express";
import verifyAuthToken from "../helpers/tokenAuth";
import { Order, OrderType } from "../models/order";

const orderStore = new Order();

// ---------CRUD functions--------- //

// Get all completed orders by user id
const index = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.user_id);
    const Orders: OrderType[] = await orderStore.index(userId);
    return res.json(Orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Get current order by user id
const show = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.user_id);
    const Order: OrderType = await orderStore.show(userId);
    return res.json(Order);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// each route use one model
const ordersRoutes = (app: express.Application) => {
  // using the middleware function to Validate the order's token to Authorize him to the next action
  app.get("/orders/current/:id", verifyAuthToken, show);
  app.get("/orders/completed/:id", verifyAuthToken, index);
};

export default ordersRoutes; // to be used in the server file to have clean code
