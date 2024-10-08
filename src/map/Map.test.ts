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

describe("7. Map.prototype.keys", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("world", 2);

  const mapIterator = map.keys();

  test("1) should return new map iterator object that contains the keys for each element in this map in insertion order.", () => {
    expect(mapIterator.next().value).toBe("hello");
    expect(mapIterator.next().value).toBe("world");
  });
});

describe("8. Map.prototype.values", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("world", 2);

  const mapIterator = map.values();

  test("1) should return new map iterator object that contains the values for each element in this map in insertion order.", () => {
    expect(mapIterator.next().value).toBe(1);
    expect(mapIterator.next().value).toBe(2);
  });
});

describe("9. Map.prototype.set", () => {
  const map = new Map();
  map.set("hello", 1);
  map.set("world", 2);

  test("1) should add an entry in this map with a specified key and a value", () => {
    expect(map.get("hello")).toBe(1);
    expect(map.get("world")).toBe(2);
  });

  test("2) should update an entry in this map with a specified key and a value", () => {
    map.set("world", 3);

    expect(map.get("hello")).toBe(1);
    expect(map.get("world")).toBe(3);
  });
});
