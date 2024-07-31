Array.prototype.at = function (index: number): string | undefined {
  if (index < -this.length || index >= this.length) {
    return undefined;
  }

  let newIndex = index < 0 ? index + this.length : index;

  return this[newIndex];
};

interface ConcatArray<T> extends Array<T> {}

Array.prototype.concat = function <T>(...values: (T | ConcatArray<T>)[]): T[] {
  //don't change existing array, return new array
  if (values.length === 0) return this.slice();
  //if there is no values, return shallow copied array.
  //slice method is return shallow copy array.

  const result: T[] = this.slice();

  values.forEach((value) => {
    //if type Array or isConcatSpreadable is true, treated as array.
    if (Array.isArray(value) || (value && value[Symbol.isConcatSpreadable])) {
      result.push(...(value as any));
    } else {
      result.push(value as T);
    }
  });

  return result;
};

Array.prototype.copyWithin = function (
  target: number,
  start: number,
  end?: number
) {
  // part of an array shallow copy and move to another position
  // don't change length of array
  // change existing array

  if (target >= this.length || start >= this.length || end === start) {
    return this;
  }

  let newTarget = target < 0 ? target + this.length : target;
  let newStart = start < 0 ? start + this.length : start;
  let newEnd =
    end === undefined ? this.length : end < 0 ? end + this.length : end;

  if (newTarget < 0) {
    newTarget = 0;
  }

  if (newStart < 0) {
    newStart = 0;
  }

  if (newEnd > this.length) {
    newEnd = this.length;
  }

  const range = Math.min(newEnd - newStart, this.length - newTarget);

  if (range <= 0) return this;

  const copiedItem = this.slice(newStart, newStart + range);

  for (let i = 0; i < range; i++) {
    this[newTarget + i] = copiedItem[i];
  }

  return this;
};

Array.prototype.entries = function* () {
  //return iterator object
  //function* -> generator function
  //yield -> pause function making, return generator object

  for (let i = 0; i < this.length; i++) {
    yield [i, this[i]];
  }
};

Array.prototype.every = function (
  callBackFn: (element: any, index: number, array: any[]) => boolean,
  thisArg?: any
) {
  for (let i = 0; i < this.length; i++) {
    if (!callBackFn.call(thisArg, this[i], i, this)) {
      return false;
    }
  }

  return true;
};

Array.prototype.fill = function (value, start?: number, end?: number) {
  if (value === undefined) return this;

  //not make new array.

  let newStart = start === undefined ? 0 : start;
  let newEnd = end === undefined ? this.length : end;

  if (newStart < 0) newStart = start + this.length;
  if (newEnd < 0) newEnd = end + this.length;

  newStart = Math.max(newStart, 0);
  newEnd = Math.min(newEnd, this.length);

  if (newStart >= newEnd) return this;

  for (let i = newStart; i < newEnd; i++) {
    this[i] = value;
  }

  return this;
};

Array.prototype.filter = function (
  callBackFn: (element: any, index: number, array: any[]) => boolean,
  thisArg?: any
) {
  //create new array
  const result: any[] = [];

  for (let i = 0; i < this.length; i++) {
    if (callBackFn.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.find = function (
  callBackFn: (element: any, index: number, array: any[]) => boolean,
  thisArg?: any
) {
  // return the first element in provided array that satisfies the provided testing function.
  // if no value satisfy the testing function, return undefined.

  for (let i = 0; i < this.length; i++) {
    if (callBackFn.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

Array.prototype.findIndex = function (
  callBackFn: (element: any, index: number, array: any[]) => boolean,
  thisArg?: any
) {
  //similar to find method
  //return index

  for (let i = 0; i < this.length; i++) {
    if (callBackFn.call(thisArg, this[i], i, this)) {
      return i;
    }
  }

  return -1;
};

Array.prototype.findLast = function (
  callBackFn: (element: any, index: number, array: any[]) => boolean,
  thisArg?: any
) {
  //opposite of find method

  for (let i = this.length - 1; i >= 0; i--) {
    if (callBackFn.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

Array.prototype.findLastIndex = function (
  callBackFn: (element: any, index: number, array: any[]) => boolean,
  thisArg?: any
) {
  //opposite of findIndex method.

  for (let i = this.length - 1; i >= 0; i--) {
    if (callBackFn.call(thisArg, this[i], i, this)) {
      return i;
    }
  }

  return -1;
};

Array.prototype.flat = function (depth: number = 1) {
  let newDepth = depth;
  let newArray: any = this;
  let result: any[] = [];

  while (newDepth !== 0) {
    result = [];

    for (let i = 0; i < newArray.length; i++) {
      if (Array.isArray(newArray[i])) {
        result.push(...newArray[i]);
      } else {
        result.push(newArray[i]);
      }
    }

    newArray = result;
    newDepth--;
  }

  return result;
};

Array.prototype.flatMap = function (
  callBackFn: (element: any, index: number, array: any[]) => any,
  thisArg?: any
) {
  //similar to map().flat(1), a little more efficient

  const result: any[] = [];

  for (let i = 0; i < this.length; i++) {
    const temp = callBackFn.call(thisArg, this[i], i, this);

    if (Array.isArray(temp)) {
      result.push(...temp);
    } else {
      result.push(temp);
    }
  }

  return result;
};

Array.prototype.forEach = function (
  callBackFn: (element: any, index: number, array: any[]) => any,
  thisArg?: any
) {
  for (let i = 0; i < this.length; i++) {
    //call method first arg -> thisArg
    //element -> this[i]
    //index -> i
    //array ->
    callBackFn.call(thisArg, this[i], i, this);
  }
};

Array.prototype.includes = function (searchElement: any, fromIndex?: number) {
  let newFromIndex = undefined === fromIndex ? 0 : fromIndex;

  if (newFromIndex < 0) {
    newFromIndex = Math.max(newFromIndex + this.length, 0);
  }

  if (newFromIndex >= this.length) {
    return false;
  }

  for (let i = newFromIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return true;
    }
  }

  return false;
};
