describe("1. Map.prototype.clear", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("wolrd", 2);

  test("1) should removes all elements from this map.", () => {
    map.clear();

    expect(map.size).toBe(0);
    expect(map.get("hello")).toBeUndefined();
  });
});

describe("2. Map.prototype.delete", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("wolrd", 2);

  test("1) should removes specific element from this map.", () => {
    map.delete("hello");

    expect(map.has("hello")).toBeFalsy();
    expect(map.has("wolrd")).toBeTruthy();
    expect(map.size).toBe(1);
  });
});
