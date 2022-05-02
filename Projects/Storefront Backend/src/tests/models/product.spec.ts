import { ProductStore, ProductType } from "../../models/product";

const store = new ProductStore();

describe("Product Model", () => {
  it("should have a getProductsByCat method", () => {
    expect(store.getProductsByCat).toBeDefined();
  });

  it("create method should add a product", async () => {
    const result: ProductType = await store.create({
      name: "banana",
      price: "8",
      category: "fruits",
    });
    expect(result).toEqual({
      id: 2,
      name: "banana",
      price: "8",
      category: "fruits",
    });
  });

  it("index method should return a list of products", async () => {
    const result: ProductType[] = await store.index();
    expect(result[0]).toEqual({
      id: 2,
      name: "banana",
      price: "8",
      category: "fruits",
    });
  });

  it("show method should return specified product", async () => {
    const result: ProductType = await store.show(2);
    expect(result).toEqual({
      id: 2,
      name: "banana",
      price: "8",
      category: "fruits",
    });
  });

  it("getProductsByCat method should return products by category", async () => {
    const result: ProductType[] = await store.getProductsByCat("fruits");
    expect(result).toEqual([
      {
        id: 2,
        name: "banana",
        price: "8",
        category: "fruits",
      },
    ]);
  });

  it("getProductsByCat method should return no products with dummy category", async () => {
    const result: ProductType[] = await store.getProductsByCat("dummy");
    expect(result).toEqual([]);
  });

  it("delete method should remove product", async () => {
    await store.deleteProduct(2);
    const result: ProductType = await store.show(2);
    expect(result).toBeUndefined;
  });
});
