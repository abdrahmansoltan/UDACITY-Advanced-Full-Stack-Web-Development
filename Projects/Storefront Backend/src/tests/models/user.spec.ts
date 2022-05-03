import { User } from "../../models/user";

const UserStore = new User();

describe("User Model", () => {
  afterAll(async () => {
    await UserStore.deleteProduct(4);
  });

  it("should have a show method", () => {
    expect(UserStore.index).toBeDefined();
  });

  it("create method should add user", async () => {
    const result = await UserStore.create({
      first_name: "Amr",
      last_name: "Mohamed",
      password: "13345",
    });
    expect(result.id).toEqual(4);
    expect(result.first_name).toEqual("Amr");
    expect(result.last_name).toEqual("Mohamed");
    expect(result.password).toBeDefined();
  });

  it("show method should return the specified user", async () => {
    const result = await UserStore.show(4);
    expect(result.id).toEqual(4);
    expect(result.first_name).toEqual("Amr");
    expect(result.last_name).toEqual("Mohamed");
    expect(result.password).toBeDefined();
  });
});
