import { Order, OrderType } from "../../models/order";

const orderStore = new Order();

const orderExample: OrderType = {
  user_id: 1,
  status: "completed",
};

describe("Order Model", () => {
  // test if the method exists
  it("should have an index method", () => {
    expect(orderStore.index).toBeDefined();
  });

  it("create method should add an order", async () => {
    const result: OrderType = await orderStore.create(orderExample);
    expect(result).toEqual({
      id: 2,
      ...orderExample,
    });
  });

  it("index method should get all orders", async () => {
    const result: OrderType[] = await orderStore.index();
    expect(result.length).toBeGreaterThan(0);
    expect(result[1]).toEqual({
      id: 2,
      ...orderExample,
    });
  });

  it("getCurrentOrders method should get no orders yet", async () => {
    const result: OrderType[] = await orderStore.getCurrentOrders();
    expect(result).toEqual([]);
  });

  it("show method should get orders based on order_id", async () => {
    const result: OrderType[] = await orderStore.show(2);
    expect(result).toEqual([
      {
        id: 2,
        ...orderExample,
      },
    ]);
  });
});
