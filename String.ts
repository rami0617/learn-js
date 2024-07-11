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
