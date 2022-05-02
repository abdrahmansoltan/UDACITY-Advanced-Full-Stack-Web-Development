const app = require("../../server");
const supertest = require("supertest");
import { UserType } from "../../models/user";

const request = supertest(app);

describe("Users Endpoints", () => {
  // to use them globally
  let token: string = "";

  const userExample: UserType = {
    first_name: "Omar",
    last_name: "Ali",
    password: "553366",
  };

  it("Should Create user & get token", async () => {
    const newUser = await request.post("/users").send(userExample);

    // get JWT for Authorization
    token = newUser.body;

    expect(newUser.status).toBe(200);
    expect(token.length).toBeGreaterThan(10);
  });

  it("Should Get all Users ", async () => {
    const users = await request
      .get("/users")
      .set(`Authorization`, "Bearer " + token);

    expect(users.status).toBe(200);
    expect(users.body.length).toBeGreaterThan(0);
  });

  it("Should Get user by user id ", async () => {
    const user = await request
      .get("/users/3")
      .set(`Authorization`, "Bearer " + token);

    expect(user.status).toBe(200);
    expect(user.body.id).toEqual(3);
    expect(user.body.first_name).toEqual("Omar");
    expect(user.body.last_name).toEqual("Ali");
    expect(user.body.password).toBeDefined();
  });

  it("Should delete user by id", async () => {
    const del = await request.delete("/users/3");

    const deletedUser = await request
      .get("/users/3")
      .set(`Authorization`, "Bearer " + token);

    expect(del.status).toBe(200);
    expect(deletedUser.body).toBeUndefined;
  });
});
