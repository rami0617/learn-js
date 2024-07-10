describe("1. String.prototype.at", () => {
  const string = "hello";

  test("1) if index is bigger than or equal to 0, return index of string", () => {
    expect(string.at(0)).toEqual(string[0]);
    expect(string.at(1)).toEqual(string[1]);
    expect(string.at(2)).toEqual(string[2]);
  });

  test("2) if index is samller than 0, return index plus length of string.", () => {
    expect(string.at(-1)).toEqual(string[-1 + string.length]);
    expect(string.at(-2)).toEqual(string[-2 + string.length]);
    expect(string.at(-3)).toEqual(string[-3 + string.length]);
  });

  test("3) if index is bigger than or equal to length of string, return undefined.", () => {
    expect(string.at(string.length)).toBeUndefined();
    expect(string.at(string.length + 1)).toBeUndefined();
  });

  test("4) if index that index plus length of string is smaller than 0, return undefined.", () => {
    expect(string.at(-1 * string.length - 1)).toBeUndefined();
    expect(string.at(-1 * string.length - 2)).toBeUndefined();
  });
});
