//arg : string, index
//if the index is negative, calculate from the end of string to find the character.
String.prototype.at = function (index: number) {
  //0. if index is bigger than length of string, return undefined
  if (this.length - 1 < index) return undefined;

  // //1. if index is zero return string[0]
  // if (index === 0) return this[0];
  // //2. if index is negative return string[string.length -1 -index]

  // if (index * -1 === index) {
  //   //negative

  //   if (this.length - 1 < index * -1) return undefined;

  //   return this[this.length + index];
  // } else {
  //   //positive
  //   return this[index];
  // }
  // //3. if index is positive return string[index]

  //REFACTORING
  let newIndex = index;

  if (index < 0) {
    newIndex += this.length;
  }

  if (newIndex > this.length || newIndex < 0) return undefined;

  return this[newIndex];
};

String.prototype.charAt = function (index: number = 0) {
  //1) if there is no arg, return first index of string
  //2) if index is bigger than legnth -1 of string, return empty string

  if (index < 0 || index >= this.length) return "";

  return this[index] ?? "";
};

String.prototype.charCodeAt = function (index: number = 0) {
  //1) return the unicode of the string corresponding to the index of the character.
  //2) if index is undefined, we think of index is zero.
  //3) if there is index, return he string corresponding to the index of the character.
  //4) if index is not between 0 and string.length -1, return NaN.
  //4) we use unicode that String.prototype.codePointAt()

  if (index < 0 || index > this.length - 1) return NaN;

  return this.codePointAt(index);
};

String.prototype.concat = function (...strings: string[]) {
  //1) the length of strings must be at least one.
  //2) there is no arg, return originally string.
  //3) there is args, return originally string plus all args
  if (!strings) return this;

  let result = this;
  for (let i = 0; i < strings.length; i++) {
    result += this;
  }

  return result;
};

String.prototype.endsWith = function (searchString: string, length?: number) {
  //1) if string have searchString, return true.
  //2) if string have not searchString, return false.
  //3) originally value of length is length of string.
  //4) if length is between 0 and length -1, we consider the string to be sliced by the length of the string.

  if (length === this.length || undefined === length) {
    return this[this.length - 1] === searchString;
  }

  const newString = this.slice(0, length);

  return newString[newString.length - 1] === searchString;
};

String.prototype.includes = function (searchString: string, position?: number) {
  //1) if there is searchString in string return true.
  //2) if there is no searchString in string return false.
  //3) if there is position, start searching from position of string.

  const newString = this.slice(
    position === undefined ? 0 : position,
    this.length
  );

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === searchString) {
      return true;
    }
  }

  return false;
};

String.prototype.indexOf = function (searchString: string, fromIndex?: number) {
  //1) if serachString is empty, we consider searchString is undefined.
  //2) if there is searchString and there is no from index, the original string is searched.

  let newFromIndex = undefined === fromIndex ? 0 : fromIndex;

  if (fromIndex !== undefined) {
    if (fromIndex >= this.length) {
      return -1;
    }

    if (fromIndex < 0) {
      newFromIndex = 0;
    }
  }

  for (let i = newFromIndex; i < this.length; i++) {
    if (this[i] === searchString) {
      return i;
    }
  }

  return -1;
  //3) if fromIndex is negative number, the original string is searched.
  //4) if fromIndex is bigger than length of string, return -1.
  //5) if serach string include string, return index of string
};

String.prototype.lastIndexOf = function (
  searchString: string,
  fromIndex?: number
) {
  //1) basic action is same indexOf.
  //2) difference is that search start is last string.

  let newFromIndex = undefined === fromIndex ? 0 : fromIndex;

  if (fromIndex !== undefined) {
    if (fromIndex >= this.length) {
      return -1;
    }

    if (fromIndex < 0) {
      newFromIndex = 0;
    }
  }

  for (let i = this.length; i >= 0; i++) {
    if (this[i] === searchString) {
      return i;
    }
  }

  return -1;
};

String.prototype.localeCompare = function (compareString: string) {
  //only english

  if (this === compareString) return 0;

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const compareStringIndex = alphabet.indexOf(compareString);
  const originalStringIndex = alphabet.indexOf(this);

  return compareStringIndex > originalStringIndex
    ? -1 * Math.abs(compareStringIndex - originalStringIndex)
    : Math.abs(compareStringIndex - originalStringIndex);
};

String.prototype.match = function (regExp: RegExp): RegExpMatchArray | null {
  //1) if regExp is undefined, return [""]

  if (regExp === undefined) return [""];
  //2) g flag means global.

  const global = regExp.global;

  let match: RegExpMatchArray | null = [];
  let array: RegExpMatchArray | null = [];

  if (global) {
    while ((array = regExp.exec(this)) !== null) {
      //3) if string same regexp, reurn first string in array
      match.push(array[0]);
    }

    return match.length ? match : null;
  } else {
    //4) if regExp is not includes g flag, return same result RegExp.exec.
    match = regExp.exec(this);

    return match ? match : null;
  }
};

String.prototype.padEnd = function (targetLength: number, fillString?: string) {
  //1) if length of originally string bigger than targetLength, return originally string.

  if (targetLength <= this.length) {
    return this;
  }

  //2) if there is no fillString, fill empty string until target length.
  //3) if there is fillString, fill fillString until target length.
  let newLength = targetLength - this.length;
  let newString = this;
  let character = fillString === undefined ? " " : fillString;

  while (newLength !== 0) {
    newString += character;
    newLength--;
  }

  return newString;
};
