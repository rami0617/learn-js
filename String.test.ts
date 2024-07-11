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

describe("2. String.prototype.charAt", () => {
  const string = "world";

  test("1) if there is no arg, return zero index of string", () => {
    expect(string.charAt()).toEqual(string[0]);
  });

  test("2) if index is bigger than or equal to 0, return index of string", () => {
    expect(string.charAt(0)).toEqual(string[0]);
    expect(string.charAt(1)).toEqual(string[1]);
    expect(string.charAt(2)).toEqual(string[2]);
  });

  test("3) if index is bigger than length of string, return empty string", () => {
    expect(string.charAt(string.length + 1)).toEqual("");
  });

  test("4) if index is samller than 0, return empty string", () => {
    expect(string.charAt(-1)).toEqual("");
  });
});

describe("3. String.prototype.charCodeAt", () => {
  const string = "world";

  test("1) if index is undefined, we think of index is zero.", () => {
    expect(string.charCodeAt(undefined)).toEqual(string.codePointAt(0));
  });

  test("2) if index is not between 0 and string.length -1, return NaN", () => {
    expect(string.charCodeAt(string.length)).toBeNaN();
    expect(string.charCodeAt(-1)).toBeNaN();
  });

  test("3) if there is index, return he string corresponding to the index of the character.", () => {
    expect(string.charCodeAt(0)).toEqual(string.codePointAt(0));
    expect(string.charCodeAt(1)).toEqual(string.codePointAt(1));
    expect(string.charCodeAt(2)).toEqual(string.codePointAt(2));
  });
});

describe("4. String.prototype.concat", () => {
  const string = "world";

  test("1) if arg is object return [object Object]", () => {
    expect("".concat({})).not.toBeInstanceOf(String);
  });

  test("2) if arg is emtpy array, return originally string", () => {
    expect(string.concat([])).toEqual(string);
  });

  test("3) there is args, return originally string plus all args.", () => {
    expect(string.concat("hello", "!")).toEqual(string + "hello" + "!");
  });
});

describe("5. String.prototype.endsWith", () => {
  const string = "world";

  test("1) if string have searchString, return true.", () => {
    expect(string.endsWith(string[string.length - 1])).toBeTruthy();
  });

  test("2) if string have not searchString, return false.", () => {
    expect(string.endsWith(string[0])).toBeFalsy();
  });

  test("3)if length is between 0 and length -1, we consider the string to be sliced by the length of the string.", () => {
    expect(string.endsWith(string[2], 3)).toBeTruthy();
    expect(string.endsWith(string[1], 2)).toBeTruthy();
    expect(string.endsWith(string[2], 2)).toBeFalsy();
  });
});

describe("6. String.prototype.includes", () => {
  const string = "hello";

  test("1) if there is searchString in string return true.", () => {
    expect(string.includes(string[2])).toBeTruthy();
  });

  test("2) if there is no searchString in string return false.", () => {
    expect(string.includes("a")).toBeFalsy();
  });

  test("3) if there is position, start searching from position of string.", () => {
    expect(string.includes(string[2], 3)).toBeTruthy();
    expect(string.includes(string[1], 3)).toBeFalsy();
  });
});

describe("7. String.prototype.indexOf", () => {
  const string = "Blue Whale";

  test("1) if serach string include string, return index of string.", () => {
    expect(string.indexOf("Blue")).toEqual(0);
    expect(string.indexOf("Blute")).toEqual(-1);
  });

  test("2) fromIndex is bigger than length of string, return -1.", () => {
    expect(string.indexOf("Blue", 20)).toEqual(-1);
  });

  test("3)if fromIndex is negative number, the original string is searched.", () => {
    expect(string.indexOf("Blue", -1)).toEqual(0);
  });
});

describe("8. String.prototype.lastIndexOf", () => {
  const string = "hello";

  test("1) if serach string include string, return index of string.", () => {
    expect(string.lastIndexOf("l")).toEqual(3);
    expect(string.lastIndexOf("x")).toEqual(-1);
  });

  test("2)if fromIndex is negative number, the original string is searched.", () => {
    expect(string.lastIndexOf("hello", -1)).toEqual(0);
  });
});
