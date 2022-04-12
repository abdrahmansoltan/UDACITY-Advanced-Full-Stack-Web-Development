import newArr from "../index";

describe("newArr should add a new item to the start of array", () => {
  const wordArr = ["cat", "dog", "rabbit", "bird"];

  it("should make a new array containing dog", () => {
    expect(newArr(3, wordArr)).toContain("dog");
  });
  it("make a new array containing 3", () => {
    expect(newArr(3, wordArr)).toContain(3);
  });
});
