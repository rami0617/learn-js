describe("1. Map.prototype.clar", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("wolrd", 2);

  test("1) should removes all elements from this map.", () => {
    map.clear();

    expect(map.size).toBe(0);
    expect(map.get("hello")).toBeUndefined();
  });
});
