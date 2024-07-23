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

String.prototype.padStart = function (
  targetLength: number,
  fillString?: string
) {
  //1) if length of originally string bigger than targetLength, return originally string.

  if (targetLength <= this.length) {
    return this;
  }

  //2) if there is no fillString, fill empty string until target length.

  //3) if there is fillString, fill fillString until target length.

  let newLength = targetLength - this.length;
  let newString = "";
  let character = fillString === undefined ? " " : fillString;

  while (newLength !== 0) {
    newString += character;
    newLength--;
  }

  return newString + this;
};

String.prototype.repeat = function (count: number) {
  //1) if count is negative number, return range error.
  if (count < 0) {
    throw new RangeError(`RangeError: Invalid count value: ${count}`);
  }

  //2) if count is Infinity, return range error.
  if (count === Infinity) {
    throw new RangeError("Invalid count value: Infinity");
  }

  //3) count change integer.
  let newCount = Math.floor(count);

  //4) repeat and return string.
  let newString = this;

  while (newCount !== 0) {
    newString += this;
    newCount--;
  }

  return newString;
};

String.prototype.replace = function (
  pattern: string | RegExp,
  replacement: string
) {
  //not include replacer function.

  //1) if pattern is empty string, return replacement + string
  if (pattern === "") return replacement + this;

  //2) find pattern, change replacement.

  if (typeof pattern === "string") {
    const index = this.indexOf(pattern);

    if (index === -1) return this;

    const beforeString = this.slice(0, index);
    const afterString = this.slice(index + pattern.length);

    return beforeString + replacement + afterString;
  } else {
    let match: RegExpExecArray | null;
    let lastIndex = 0;
    let result = "";

    while ((match = pattern.exec(this)) !== null) {
      result += this.slice(lastIndex, match.length) + replacement;
      lastIndex = match.index + match[0].length;

      if (!pattern.global) break;
    }

    result += this.slice(lastIndex);

    return result;
  }
};

String.prototype.replaceAll = function (
  pattern: string | RegExp,
  replacement: string
) {
  if (typeof pattern === "string") {
    return this.split(pattern).join(replacement);
  } else {
    return this.replace(pattern, replacement);
  }
};

String.prototype.search = function (regexp: RegExp) {
  //1) find regexp, return index
  //2) if don't find regex, return -1
  //3) actual implementation comes from RegExp.prototype[@@search]().
  return regexp[Symbol.search](this);
};

String.prototype.slice = function (indexStart: number, indexEnd?: number) {
  //1) if indexStart bigger or same than length of string, return empty string

  if (indexStart >= this.length) return "";

  //2) if indexStart samller than 0, count last index of string.

  let newIndexStart = indexStart;
  let newIndexEnd = indexEnd ?? this.length;

  if (indexStart < 0) {
    newIndexStart = this.length + indexStart;
    if (newIndexStart < 0) {
      newIndexStart = 0;
    }
  }

  if (indexEnd !== undefined && indexEnd < 0) {
    newIndexEnd = this.length + indexEnd;

    if (newIndexEnd < 0) {
      newIndexEnd = 0;
    }
  }

  if (newIndexEnd <= newIndexStart) return "";

  if (newIndexEnd > this.length) {
    newIndexEnd = this.length;
  }

  let result = "";

  for (let i = newIndexStart; i < newIndexEnd; i++) {
    result += this[i];
  }

  return result;
};

String.prototype.split = function (separator?: string, limit?: number) {
  //Not include Regexp
  //separate string, limit number

  //'abcd'.split() -> ['abcd']
  if (separator === undefined) {
    return [this];
  }

  //'abcd'.split('') -> ['a','b','c','d']
  if (separator === "") {
    return Array.from(this).slice(0, limit);
  }

  //if length of saparator is bigger than one, separator must exactly same word.

  //'abcd'.split('a') -> ['','bcd']

  const result: string[] = [];
  let index = this.indexOf(separator);

  if (index === -1) {
    //'abcd'.split('ef') -> ['abcd']
    return [this];
  } else {
    //'abcd'.split('bc') -> ['a','d']
    //'aaaa'.split('a') -> ['','','','']
    //'hello world'.split(' ') -> ['hello','world']

    //배열에 처음 separator가 출연하기 전 string을 넣음

    let matchIndex = 0;
    let startIndex = 0;
    let count = 0;

    while ((matchIndex = this.indexOf(separator, startIndex)) !== -1) {
      result.push(this.slice(startIndex, matchIndex));
      startIndex = matchIndex + separator.length;
      count++;

      if (limit !== undefined && count === limit - 1) {
        break;
      }
    }

    //separator가 나타난 것들을 모두 제외한 뒤 남은것들을 배열에 넣음
    result.push(this.slice(startIndex));

    return limit !== undefined ? result.slice(0, limit) : result;
  }
};

String.prototype.startsWith = function (
  searchString: string,
  position?: number
) {
  //searchString으로시작하면 true, 아니면 false
  const newString = this.slice(position === undefined ? 0 : position);
  const index = newString.indexOf(searchString);

  return index === 0;
};

String.prototype.substring = function (indexStart: number, indexEnd?: number) {
  //endStart not include

  if (indexStart == indexEnd) {
    return "";
  }

  let newIndexStart = indexStart;

  let newIndexEnd = indexEnd === undefined ? this.length : indexEnd;

  if (indexStart < 0 || isNaN(indexStart)) {
    newIndexStart = 0;
  }

  if (indexEnd !== undefined && (indexEnd < 0 || isNaN(indexEnd))) {
    newIndexEnd = 0;
  }

  if (newIndexStart > newIndexEnd) {
    [newIndexStart, newIndexEnd] = [newIndexEnd, newIndexStart];
    // let temp = newIndexStart;
    // newIndexStart = newIndexEnd;
    // newIndexEnd = temp;
  }

  return this.slice(newIndexStart, newIndexEnd);
};
