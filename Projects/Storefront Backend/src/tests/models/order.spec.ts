import { Order, OrderType } from "../../models/order";

const orderStore = new Order();

const orderExample: OrderType = {
  product_id: 1,
  quantity: 4,
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
      id: 1,
      ...orderExample,
    });
  });

  it("index method should get all orders", async () => {
    const result: OrderType[] = await orderStore.index();
    expect(result).toEqual([
      {
        id: 1,
        ...orderExample,
      },
    ]);
  });

  it("getCurrentOrders method should get no orders yet", async () => {
    const result: OrderType[] = await orderStore.getCurrentOrders();
    expect(result).toEqual([]);
  });

  it("show method should get orders based on order_id", async () => {
    const result: OrderType[] = await orderStore.show(1);
    expect(result).toEqual([
      {
        id: 1,
        ...orderExample,
      },
    ]);
  });
});
