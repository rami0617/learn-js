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

describe("3. Map.prototype.entries", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("wolrd", 2);

  test("1) should return new map iterator object that contains the [key, value] pairs.", () => {
    const iteratorObjectMap = map.entries();

    expect(iteratorObjectMap.next()).toEqual({
      value: ["hello", 1],
      done: false,
    });
    expect(iteratorObjectMap.next()).toEqual({
      value: ["wolrd", 2],
      done: false,
    });
  });
});

describe("4. Map.prototype.forEach", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("wolrd", 2);

  test("1) should return undefined.", () => {
    expect(map.forEach((ele) => ele === ele + "1")).toBeUndefined();
  });
});
