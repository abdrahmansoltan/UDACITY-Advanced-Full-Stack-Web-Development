import express, { Request, Response } from "express";
import verifyAuthToken from "../helpers/tokenAuth";
import { Order, OrderType } from "../models/order";

const orderStore = new Order();

// ---------CRUD functions--------- //

// create order
const create = async (req: Request, res: Response) => {
  try {
    // get user data from the request
    const order: OrderType = {
      product_id: req.body.product_id,
      quantity: req.body.quantity,
      user_id: req.body.user_id,
      status: req.body.status,
    };

    const newOrder: OrderType = await orderStore.create(order);
    return res.json(newOrder);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Get all completed orders
const CompletedOrders = async (req: Request, res: Response) => {
  try {
    const Orders: OrderType[] = await orderStore.getCompletedOrders();
    return res.json(Orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Get all Current orders
const CurrentOrders = async (req: Request, res: Response) => {
  try {
    const Orders: OrderType[] = await orderStore.getCurrentOrders();
    return res.json(Orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Get orders by user id
const show = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.id);
    const Orders: OrderType[] = await orderStore.show(userId);
    return res.json(Orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
// Get all orders
const index = async (req: Request, res: Response) => {
  try {
    const Orders: OrderType[] = await orderStore.index();
    return res.json(Orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// each route use one model
const ordersRoutes = (app: express.Application) => {
  // using the middleware function to Validate the order's token to Authorize him to the next action
  app.post("/orders", verifyAuthToken, create);
  app.get("/orders", verifyAuthToken, index);
  app.get("/orders/:id", verifyAuthToken, show);
  app.get("/orders/current", verifyAuthToken, CurrentOrders);
  app.get("/orders/completed", verifyAuthToken, CompletedOrders);
};

export default ordersRoutes; // to be used in the server file to have clean code
