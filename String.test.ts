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

describe("9. String.prototype.localeCompare", () => {
  test("1) if compare string is behind original string, return negative number(distance).", () => {
    expect("a".localeCompare("c")).toEqual(-1);
  });

  test("2) if compare string is same original string, return 0.", () => {
    expect("a".localeCompare("a")).toEqual(0);
  });

  test("3) if compare string is in front of original string, return positive number(distance).", () => {
    expect("c".localeCompare("a")).toEqual(1);
  });
});

describe("10. String.prototype.match", () => {
  const string = "hello";

  test("1) if regExp is undefined, return [''].", () => {
    const result = string.match();

    expect(JSON.parse(JSON.stringify(result))).toEqual([""]);
  });

  test("2) if string same regexp, reurn first string in array", () => {
    const reuslt = string.match(/h/g);

    expect(JSON.parse(JSON.stringify(reuslt))).toEqual(
      JSON.parse(JSON.stringify(["h"]))
    );
  });

  test("3) if regExp is not includes g flag, return same result RegExp.exec.", () => {
    const result = string.match("h");
    const execResult = RegExp("h").exec(string);

    expect(JSON.parse(JSON.stringify(result))).toEqual(
      JSON.parse(JSON.stringify(execResult))
    );
  });
});

describe("11. String.prototype.padEnd", () => {
  const string = "hello";
  const defaultFillString = " ";

  test("1) if length of originally string bigger than targetLength, return originally string.", () => {
    expect(string.padEnd(1)).toEqual(string);
    expect(string.padEnd(2)).toEqual(string);
  });

  test("2) if there is no fillString, fill empty string until target length.", () => {
    expect(string.padEnd(6)).toEqual(string + defaultFillString);
    expect(string.padEnd(7)).toEqual(string + defaultFillString.repeat(2));
  });

  test("3) if there is fillString, fill fillString until target length.", () => {
    expect(string.padEnd(6, "!")).toEqual(string + "!");
    expect(string.padEnd(7, "!")).toEqual(string + "!".repeat(2));
  });
});

describe("12. String.prototype.padStart", () => {
  const string = "hello";
  const defaultFillString = " ";

  test("1) if length of originally string bigger than targetLength, return originally string.", () => {
    expect(string.padStart(1)).toEqual(string);
    expect(string.padStart(2)).toEqual(string);
  });

  test("2) if there is no fillString, fill empty string until target length.", () => {
    expect(string.padStart(6)).toEqual(defaultFillString + string);
    expect(string.padStart(7)).toEqual(defaultFillString.repeat(2) + string);
  });

  test("3) if there is fillString, fill fillString until target length.", () => {
    expect(string.padStart(6, "!")).toEqual("!" + string);
    expect(string.padStart(7, "!")).toEqual("!".repeat(2) + string);
  });
});

describe("13. String.prototype.repeat", () => {
  const string = "hello";

  test("1) if count is negative number or Infinity, return range error.", () => {
    expect(() => string.repeat(-1)).toThrow(RangeError);
    expect(() => string.repeat(1 / 0)).toThrow("Invalid count value: Infinity");
  });

  test("2) count change integer.", () => {
    expect(string.repeat(2.1)).toEqual(string.repeat(2));
  });

  test("3) repeat the string the number of times.", () => {
    expect(string.repeat(3)).toEqual(string + string + string);
  });
});

describe("14. String.prototype.replace", () => {
  const string = "hello, world";

  test("1) if pattern is empty string, return replacement + string", () => {
    expect(string.replace("", "~")).toBe("~" + string);
  });

  test("2) if pattern is string, return pattern change replacement", () => {
    expect(string.replace("world", "~")).toBe("hello, ~");
  });

  test("3) if pattern is regexp, return pattern change replacement", () => {
    expect(string.replace(/w/i, "~")).toBe("hello, ~orld");
  });
});

describe("15. String.prototype.replaceAll", () => {
  const string = "hello, world";

  test("1) find all pattern, change replacement", () => {
    expect(string.replaceAll("o", "!")).toBe("hell!, w!rld");
    expect(string.replaceAll(/o/g, "!")).toBe("hell!, w!rld");
  });
});

describe("16. String.prototype.search", () => {
  const string = "hello, world";

  test("1) find regexp, return index.", () => {
    expect(string.search(/o/i)).toBe(4);
    expect(string.search(/h/i)).toBe(0);
  });

  test("2) if don't find regex, return -1.", () => {
    expect(string.search(/!/i)).toBe(-1);
    expect(string.search(/n/i)).toBe(-1);
  });
});

describe("17. String.prototype.slice", () => {
  const string = "hello, world";

  test("1) slice string.", () => {
    expect(string.slice(0, 1)).toBe("h");
    expect(string.slice(1, 4)).toBe("ell");
  });

  test("2) if indexStart is negative number, count last index.", () => {
    expect(string.slice(-1)).toBe("d");
    expect(string.slice(-2)).toBe("ld");
  });

  test("3) if indexStart is bigger than length of string, return empty string.", () => {
    expect(string.slice(20)).toBe("");
  });

  test("4) if indexEnd is negative number, count last index.", () => {
    expect(string.slice(0, -1)).toBe("hello, worl");
    expect(string.slice(2, -1)).toBe("llo, worl");
  });

  test("5) if indexEnd is bigger than length of string, count length of string.", () => {
    expect(string.slice(0, 20)).toBe("hello, world");
  });
});

describe("18. String.prototype.split", () => {
  const string = "hello, world";

  test("1) if seprator is undefined return string in array.", () => {
    expect(string.split()).toStrictEqual([string]);
  });

  test("2) if separator is empty string, return slplited string in array.", () => {
    expect(string.split("")).toStrictEqual(Array.from(string));
    expect(string.split("", 2)).toStrictEqual(Array.from(string).slice(0, 2));
  });

  test("3) if there is separator, return separator is emtpy string.", () => {
    expect(string.split("h")).toStrictEqual(["", "ello, world"]);
    expect(string.split("he")).toStrictEqual(["", "llo, world"]);
  });

  test("4) if there are separator and limit, return separator is emtpy string and string as much as limit.", () => {
    expect("ababcc".split("ab", 2)).toStrictEqual(["", ""]);
    expect(string.split("o", 1)).toStrictEqual(["hell"]);
  });
});

describe("19. String.prototype.startsWith", () => {
  const string = "hello, world";

  test("1) if string have searchString, return true.", () => {
    expect(string.startsWith("h")).toBeTruthy();
  });

  test("2) if string don't have searchString, return false.", () => {
    expect(string.startsWith("e")).toBeFalsy();
  });

  test("3) if string have searchString where range up to the position of the string, return true.", () => {
    expect(string.startsWith("l", 2)).toBeTruthy();
  });

  test("4) if string don't have searchString where range up to the position of the string, return false.", () => {
    expect(string.startsWith("e", 3)).toBeFalsy();
  });
});

describe("20. String.prototype.substring", () => {
  const string = "hello, world";

  test("1) if indexStart and indexEnd are the same, return empty string.", () => {
    expect(string.substring(1, 1)).toBe("");
  });

  test("2) if indexStart is negative number, treated as 0.", () => {
    expect(string.substring(-1)).toBe(string);
  });

  test("3) if indexEnd is negative number, treated as 0 and if indexStart bigger than indexEnd, swap indexStart and indexEnd.", () => {
    expect(string.substring(3, -2)).toBe(string.slice(0, 3));
  });
});

describe("21. String.prototype.toLowerCase", () => {
  const string = "HELLO, WORLD";

  test("1) converts a string to lowercase.", () => {
    expect(string.toLowerCase()).toBe("hello, world");
  });
});

describe("22. String.prototype.toLowerCase", () => {
  const number = 123;

  test("1) converts a number to string.", () => {
    expect(number.toString()).toBe("123");
  });
});

describe("23. String.prototype.trim", () => {
  const string = "          HELLO, WORLD        ";

  test("1) remove start and end empty string.", () => {
    expect(string.trim()).toBe("HELLO, WORLD");
  });
});

describe("24. String.prototype.valueOf", () => {
  test("1) return the raw value of a String object.", () => {
    expect(new String(1111).valueOf()).toBe("1111");
  });
});
