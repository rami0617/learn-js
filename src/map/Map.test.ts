describe("1. Map.prototype.clear", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("world", 2);

  test("1) should removes all elements from this map.", () => {
    map.clear();

    expect(map.size).toBe(0);
    expect(map.get("hello")).toBeUndefined();
  });
});

describe("2. Map.prototype.delete", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("world", 2);

  test("1) should removes specific element from this map.", () => {
    map.delete("hello");

    expect(map.has("hello")).toBeFalsy();
    expect(map.has("world")).toBeTruthy();
    expect(map.size).toBe(1);
  });
});

describe("3. Map.prototype.entries", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("world", 2);

  test("1) should return new map iterator object that contains the [key, value] pairs.", () => {
    const iteratorObjectMap = map.entries();

    expect(iteratorObjectMap.next()).toEqual({
      value: ["hello", 1],
      done: false,
    });
    expect(iteratorObjectMap.next()).toEqual({
      value: ["world", 2],
      done: false,
    });
  });
});

describe("4. Map.prototype.forEach", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("world", 2);

  test("1) should return undefined.", () => {
    expect(map.forEach((ele) => ele === ele + "1")).toBeUndefined();
  });
});

describe("5. Map.prototype.get", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("world", 2);

  test("1) should return a specified element from this map.", () => {
    expect(map.get("hello")).toBe(1);
    expect(map.get("world")).toBe(2);
  });

  test("2) should return undefined if the key can't be found in the Map object.", () => {
    expect(map.get("ohoh")).toBeUndefined();
  });
});

describe("6. Map.prototype.has", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("world", 2);

  test("1) should return true if an element with the specified key exists in the Map object.", () => {
    expect(map.has("hello")).toBeTruthy();
  });

  test("1) should return false if an element with the specified key not exists in the Map object.", () => {
    expect(map.has("ohoh")).toBeFalsy();
  });
});
