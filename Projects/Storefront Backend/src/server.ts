import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import productsRoutes from "./handlers/Products";

const app: express.Application = express();
const PORT: number = 3000;

app.use(bodyParser.json());

productsRoutes(app);

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log(`listening on port http://localhost:${PORT}`);
});
