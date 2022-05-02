import { ProductType } from "../../models/product";
import { UserType } from "../../models/user";
const app = require("../../server");
const supertest = require("supertest");

const request = supertest(app);

describe("Products Endpoints", () => {
  // to use them globally
  let token: string = "";

  const productExample: ProductType = {
    name: "orange",
    price: "4",
    category: "fruits",
  };
  const userExample: UserType = {
    first_name: "Jack",
    last_name: "Martin",
    password: "37694",
  };

  // creating user to get JWT for Authorization
  beforeAll(async () => {
    const newUser = await request.post("/users").send(userExample);

    token = newUser.body;
  });
  afterAll(async () => {
    await request.delete("/users/2");
  });

  it("Should Create a product ", async () => {
    const newProduct = await request
      .post("/products")
      .send(productExample)
      .set("Authorization", `Bearer ${token}`);

    expect(newProduct.status).toBe(200);
    expect(newProduct.body).toEqual({
      id: 1,
      ...productExample,
    });
  });

  it("Should Get all products ", async () => {
    const products = await request.get("/products");

    expect(products.status).toBe(200);
    expect(products.body.length).toBeGreaterThan(0);
  });

  it("Should Get product by id ", async () => {
    const order = await request.get("/products/1");
    expect(order.status).toBe(200);
    expect(order.body).toEqual({
      id: 1,
      ...productExample,
    });
  });

  it("Should Get all products with category (fruits)", async () => {
    const products = await request.get("/products/category/fruits");
    expect(products.status).toBe(200);
    expect(products.body).toEqual([
      {
        id: 1,
        ...productExample,
      },
    ]);
  });

  it("Should delete product with id", async () => {
    const deletedOrder = await request.delete("/products/1");

    const products = await request.get("/products");

    expect(products.status).toBe(200);
    expect(products.body).toEqual([]);
  });
});
