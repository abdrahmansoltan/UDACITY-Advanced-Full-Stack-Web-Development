import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import productsRoutes from "./handlers/Products";
import usersRoutes from "./handlers/users";
import ordersRoutes from "./handlers/orders";

const app: express.Application = express(); // export for testing

// HTTP request logger middleware
app.use(morgan("short"));

dotenv.config(); // // initialize the environment variables

const { PORT } = process.env;

app.use(bodyParser.json());

productsRoutes(app);
usersRoutes(app);
ordersRoutes(app);

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log(`listening on port http://localhost:${PORT}`);
});

module.exports = app;
