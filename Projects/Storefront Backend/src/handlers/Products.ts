import express, { Request, Response } from "express";
// TODO: import product-class from the model
// TODO: import JWT

// CRUD functions

// Get all products
const index = async (req: Request, res: Response) => {
  // TODO: get all articles
  res.json("all products");
};

// Get product by id
const show = async (req: Request, res: Response) => {
  // TODO: get specified article
  res.json("selected product");
};

// Create product
const create = async (req: Request, res: Response) => {
  try {
    // TODO: get product data from the request

    // TODO: create product

    res.json("new product's data");
  } catch (err) {
    res.status(400); // Bad Request
    res.json(err);
  }
};

// Get products by category
const showByCategory = async (req: Request, res: Response) => {
  const category: string = String(req.params.category);

  // TODO: get products using the category

  return res.json("products By Category");
};

// Delete product by ID
const destroy = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  // TODO: delete the product

  return res.json("deleted Order");
};

// each route use one model
const productsRoutes = (app: express.Application) => {
  app.get("/products", index);
  app.get("/products/:id", show);
  app.post("/products", create);
  app.get("/products/:category", showByCategory);
  app.delete("/products", destroy);
};

export default productsRoutes; // to be used in the server file to have clean code
