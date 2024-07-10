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

export default { String };
