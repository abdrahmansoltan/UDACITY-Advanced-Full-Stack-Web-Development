const app = require("../server");
const supertest = require("supertest");

const request = supertest(app);

describe("Test endpoint response", () => {
  it("should get the valid endpoint response", async (): Promise<void> => {
    const response = await request.get("/products");
    expect(response.status).toBe(200);
  });

  // TODO:
  // it("should return Error-400 for invalid category name", async (): Promise<void> => {
  //   const response = await request.get("/products/category/dummy");
  //   expect(response.status).toBe(400);
  // });
});
