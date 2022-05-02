import { OrderProductType, OrderProductStore } from "../models/order_product";
import express, { Request, Response } from "express";
import verifyAuthToken from "../helpers/tokenAuth";

const store = new OrderProductStore();

const addProduct = async (req: Request, res: Response) => {
  const order_id: number = parseInt(req.params.id as unknown as string);
  const product_id: number = parseInt(req.body.product_id as unknown as string);
  const quantity: number = parseInt(req.body.quantity);
  const orderProd: OrderProductType = { quantity, order_id, product_id };
  try {
    const newOrderProduct = await store.addProduct(orderProd);
    res.json(newOrderProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const orderProductRoutes = (app: express.Application) => {
  app.post("/orders/:id/products", verifyAuthToken, addProduct);
};

export default orderProductRoutes;
