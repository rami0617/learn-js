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

describe("5. Array.prototype.every", () => {
  const array = ["a", "b", "c"];

  test("1) should return true when elements pass.", () => {
    expect(["a", "a", "a"].every((element) => element === "a")).toBeTruthy();
  });

  test("2) should return false when elements not pass.", () => {
    expect(array.every((element) => element === "a")).toBeFalsy();
  });
});

describe("6. Array.prototype.fill", () => {
  const array = ["a", "b", "c"];

  test("1) should return fill value.", () => {
    expect(array.fill("1")).toMatchObject(["1", "1", "1"]);
  });

  test("2) should return fill value to start, not include end", () => {
    expect(array.fill("2", 1, 2)).toMatchObject(["1", "2", "1"]);
  });

  test("3) should return fill the array with value from start to last index of array.", () => {
    expect(array.fill("2", 1)).toMatchObject(["1", "2", "2"]);
  });
});

describe("7. Array.prototype.filter", () => {
  const array = ["a", "b", "c"];

  test("1) should return array containing only the elements returned as true in callbackFn.", () => {
    expect(array.filter((ele) => ele === "a")).toMatchObject(["a"]);
    expect(array.filter((ele) => ele === "b")).toMatchObject(["b"]);
  });

  test("2) should do not change the existing array.", () => {
    const originArray = ["a", "b", "c"];
    array.filter((ele) => ele === "a");

    expect(array).toEqual(originArray);
  });
});

describe("8. Array.prototype.find", () => {
  const array = ["a", "b", "c"];

  test("1) should return first element returned as true in callbackFn.", () => {
    expect(array.find((ele) => ele === "a")).toEqual("a");
    expect(array.find((ele) => ele === "b")).toEqual("b");
  });

  test("2) if there is no element as true in callbackFn, return undefined.", () => {
    expect(array.find((ele) => ele === "d")).toBeUndefined();
    expect(array.find((ele) => ele === "e")).toBeUndefined();
  });
});

describe("9. Array.prototype.findIndex", () => {
  const array = ["a", "b", "c", "a", "b"];

  test("1) should return first index returned as true in callbackFn.", () => {
    expect(array.findIndex((ele) => ele === "a")).toEqual(0);
    expect(array.findIndex((ele) => ele === "b")).toEqual(1);
  });

  test("2) if there is no element as true in callbackFn, return -1.", () => {
    expect(array.findIndex((ele) => ele === "d")).toEqual(-1);
    expect(array.findIndex((ele) => ele === "e")).toEqual(-1);
  });
});

describe("10. Array.prototype.findLast", () => {
  const array = [1, 2, 3, 4, 5];

  test("1) should return first element returned as true in callbackFn that find from the end of the array.", () => {
    expect(array.findLast((ele) => ele > 2)).toEqual(5);
    expect(array.findLast((ele) => ele > 3)).toEqual(5);
  });

  test("2) if there is no element as true in callbackFn, return undfined.", () => {
    expect(array.findLast((ele) => ele > 10)).toBeUndefined();
    expect(array.findLast((ele) => ele < -1)).toBeUndefined();
  });
});

describe("11. Array.prototype.findLastIndex", () => {
  const array = [1, 2, 3, 4, 5];

  test("1) should return first index returned as true in callbackFn that find from the end of the array.", () => {
    expect(array.findLastIndex((ele) => ele > 3)).toEqual(4);
    expect(array.findLastIndex((ele) => ele > 1)).toEqual(4);
  });

  test("2) if there is no element as true in callbackFn, return -1.", () => {
    expect(array.findLastIndex((ele) => ele > 10)).toEqual(-1);
    expect(array.findLastIndex((ele) => ele < 1)).toEqual(-1);
  });
});

describe("12. Array.prototype.flat", () => {
  test("1) if there is no arg, depth as 1.", () => {
    expect([1, 2, [3, 4, 5]].flat()).toEqual([1, 2, [3, 4, 5]].flat(1));
    expect([["a"], [["b"]]].flat()).toEqual([["a"], [["b"]]].flat(1));
  });

  test("2) if there is arg, flatten by depth.", () => {
    expect([1, 2, [3, 4, 5]].flat(1)).toEqual([1, 2, 3, 4, 5]);
    expect([[["a"]], [["b"]]].flat(2)).toEqual(["a", "b"]);
  });
});
