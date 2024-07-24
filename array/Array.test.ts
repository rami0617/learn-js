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
