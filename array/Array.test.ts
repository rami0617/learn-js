describe("1. Array.prototype.at", () => {
  const array = ["a", "b", "c"];

  test("1) if index is bigger than or equal to 0, return index of array", () => {
    expect(array.at(0)).toEqual(array[0]);
    expect(array.at(1)).toEqual(array[1]);
    expect(array.at(2)).toEqual(array[2]);
  });

  test("2) if index is samller than 0, return index plus length of array.", () => {
    expect(array.at(-1)).toEqual(array[-1 + array.length]);
    expect(array.at(-2)).toEqual(array[-2 + array.length]);
    expect(array.at(-3)).toEqual(array[-3 + array.length]);
  });

  test("3) if index is bigger than or equal to length of array, return undefined.", () => {
    expect(array.at(array.length)).toBeUndefined();
    expect(array.at(array.length + 1)).toBeUndefined();
  });

  test("4) if index that index plus length of array is smaller than 0, return undefined.", () => {
    expect(array.at(-1 * array.length - 1)).toBeUndefined();
    expect(array.at(-1 * array.length - 2)).toBeUndefined();
  });
});

describe("2. Array.prototype.concat", () => {
  const array = ["a", "b", "c"];

  test("1) if there are no args, return shallow copied existing array.", () => {
    expect(array.concat()).toEqual(array.slice());
  });

  test("2) if there are args, return connect existing array and args.", () => {
    expect(array.concat(["d"])).toEqual(["a", "b", "c", "d"]);
    expect(array.concat(["e"])).toEqual(["a", "b", "c", "e"]);
  });

  test("3) if args is string or number, return connect existing array and args.", () => {
    expect(array.concat("d")).toEqual(["a", "b", "c", "d"]);
    expect(array.concat(2)).toEqual(["a", "b", "c", 2]);
  });
});

describe("3. Array.prototype.copyWithin", () => {
  test("1) copies the element in start to target.", () => {
    expect(["a", "b", "c"].copyWithin(1, 2)).toEqual(["a", "c", "c"]);
    expect(["a", "b", "c"].copyWithin(0, 1)).toEqual(["b", "c", "c"]);
  });

  test("2) copies the element in start to end to target.", () => {
    expect(["a", "b", "c"].copyWithin(1, 2, 3)).toEqual(["a", "c", "c"]);
    expect(["a", "b", "c"].copyWithin(0, 1, 2)).toEqual(["b", "b", "c"]);
  });

  test("3) if start and end are equal or start bigger than length of array or target bigger than length of array, return exsiting array.", () => {
    expect(["a", "b", "c"].copyWithin(1, 2, 2)).toEqual(["a", "b", "c"]);
    expect(["a", "b", "c"].copyWithin(4, 2, 2)).toEqual(["a", "b", "c"]);
    expect(["a", "b", "c"].copyWithin(1, 6, 2)).toEqual(["a", "b", "c"]);
  });
});

describe("4. Array.prototype.entries", () => {
  const array = ["a", "b", "c"].entries();

  test("1) should return an iterator with index-value pairs.", () => {
    expect(array.next()).toEqual({ value: [0, "a"], done: false });
    expect(array.next()).toEqual({ value: [1, "b"], done: false });
    expect(array.next()).toEqual({ value: [2, "c"], done: false });
  });

  test("2) should work with empty arrays.", () => {
    expect([].entries().next()).toEqual({ value: undefined, done: true }); //'true' means completed circuit
  });
});
