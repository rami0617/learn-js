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

Array.prototype.indexOf = function (searchElement: any, fromIndex?: number) {
  let newFromIndex = undefined === fromIndex ? 0 : fromIndex;

  if (newFromIndex < 0) {
    newFromIndex = Math.max(fromIndex + this.length, 0);
  }

  if (newFromIndex >= this.length) {
    return -1;
  }

  for (let i = newFromIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

Array.prototype.join = function (separator: string = ",") {
  if (this.length === 0) return "";

  let result = "";
  let newSeparator =
    separator === undefined || separator === null ? "" : separator;

  function helper(element) {
    if (!Array.isArray(element))
      return element === null || element === undefined
        ? ""
        : element.toString();

    let newArray = element.slice();
    let temp = "";

    for (let i = 0; i < newArray.length; i++) {
      temp += helper(newArray[i]);
      if (i < newArray.length - 1) {
        temp += newSeparator;
      }
    }
    return temp;
  }

  for (let i = 0; i < this.length; i++) {
    result += helper(this[i]);
    if (i < this.length - 1) {
      result += newSeparator;
    }
  }

  return result;
};

Array.prototype.keys = function* () {
  //return new array iterator
  //create key,so return index

  for (let i = 0; i < this.length; i++) {
    yield i;
  }
};

Array.prototype.lastIndexOf = function (
  searchElement: any,
  fromIndex?: number
) {
  if (Object.is(searchElement, NaN)) return -1;
  //searches from the alst index and returns the first element equal to searchElement
  let newFromIndex = fromIndex === undefined ? this.length - 1 : fromIndex;

  if (newFromIndex < 0) {
    newFromIndex = Math.max(this.length + fromIndex, 0);
  }

  for (let i = newFromIndex; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

Array.prototype.map = function (
  callBackFn: (element: any, index: number, array: any[]) => any,
  thisArg?: any
) {
  //map method return new array
  //dosen't use new array -> forEach, for ~ of
  //new array -> map

  const result: any[] = [];

  for (let i = 0; i < this.length; i++) {
    //sparse array
    if (this.hasOwnProperty(i)) {
      result.push(callBackFn.call(thisArg, this[i], i, this));
    }
  }

  return result;
};

Array.prototype.pop = function () {
  //if the array is empty return undeifned
  //the removed element from the array
  if (this.length === 0) return undefined;

  const lastElement = this[this.length - 1];

  this.splice(this.length - 1, 1);

  return lastElement;
};

Array.prototype.push = function (...element) {
  //return length of array
  let lastIndex = this.length - 1;

  for (let i = 0; i < element.length; i++) {
    this[lastIndex + i] = element[i];
  }

  return this.length;
};

Array.prototype.reduce = function (
  callbackFn: (accumulator, currentValue, currentIndex, array) => any,
  initialValue?: any
) {
  //Thrown if the array contains no elements and initialValue is not provided
  if (this.length === 0 && initialValue === undefined)
    throw new TypeError("Error: Reduce of empty array with no initial value");

  let newAccumulator = initialValue === undefined ? this[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < this.length; i++) {
    newAccumulator = callbackFn(newAccumulator, this[i], i, this);
  }

  return newAccumulator;
};

Array.prototype.reduceRight = function (
  callbackFn: (accumulator, currentValue, currentIndex, array) => any,
  initialValue?: any
) {
  //Thrown if the array contains no elements and initialValue is not provided
  if (this.length === 0 && initialValue === undefined)
    throw new TypeError("Error: Reduce of empty array with no initial value");

  //reduce vs reduceRight
  //reduceRight -> right to left
  let newAccumulator =
    initialValue === undefined ? this[this.length - 1] : initialValue;
  let startIndex =
    initialValue === undefined ? this.length - 2 : this.length - 1;

  for (let i = startIndex; i >= 0; i--) {
    newAccumulator = callbackFn(newAccumulator, this[i], i, this);
  }

  return newAccumulator;
};

Array.prototype.reverse = function () {
  //reverse is change the original array.

  for (let i = 0; i < Math.floor(this.length / 2); i++) {
    const temp = this[this.length - 1 - i];
    this[this.length - 1 - i] = this[i];
    this[i] = temp;
  }

  return this;
};

Array.prototype.shift = function () {
  if (this.length === 0) return undefined;

  const firstElemet = this[0];

  this.splice(0, 1);

  return firstElemet;
};

Array.prototype.slice = function (start?: number, end?: number) {
  //create new array
  //include start, not include end
  let newStart = start === undefined ? 0 : start;
  let newEnd = end === undefined ? this.length : end;

  newStart = newStart < 0 ? Math.max(this.length + newStart, 0) : newStart;
  newEnd = newEnd < 0 ? Math.max(this.length + newEnd, 0) : newEnd;

  newEnd = Math.min(newEnd, this.length);

  if (newStart >= this.length || newEnd <= newStart) return [];

  const result: any[] = [];

  for (let i = newStart; i < newEnd; i++) {
    result.push(this[i]);
  }

  return result;
};

Array.prototype.some = function (
  callBackFn: (element: any, index: number, array: any[]) => boolean,
  thisArg?: any
) {
  //return boolean

  for (let i = 0; i < this.length; i++) {
    if (callBackFn.call(thisArg, this[i], i, this)) {
      return true;
    }
  }

  return false;
};

Array.prototype.sort = function (compareFn?: (a, b) => any) {
  //reference to the original array.
  //sort in place. no copy

  if (!compareFn) {
    compareFn = function (a, b) {
      if (a < b) -1;
      if (a > b) 1;
      return 0;
    };
  }

  //merge sort

  const helper = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
      if (compareFn(arr1[i], arr2[j]) <= 0) {
        result.push(left[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }

    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
  };

  const mergeSort = (array) => {
    if (array.length <= 1) return array;

    const piviot = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, piviot));
    const right = mergeSort(array.slice(mid));

    return helper(left, right);
  };

  const sortedArray = mergeSort(this);

  for (let i = 0; i < this.length; i++) {
    this[i] = sortedArray[i];
  }

  return this;
};

Array.prototype.splice = function (start, deleteCount, ...items) {
  //in place
  //return original array - splice element

  if (start === undefined) {
    //no delete
    return [];
  }

  let length = this.length;
  let newStart =
    start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  deleteCount =
    deleteCount === undefined
      ? length - newStart
      : Math.min(deleteCount, length - newStart);

  let deletedItems = this.slice(newStart, newStart + deleteCount);

  if (deleteCount !== items.length) {
    if (deleteCount > items.length) {
      for (let i = newStart + deleteCount; i < length; i++) {
        this[i - (deleteCount - items.length)] = this[i];
      }
    } else {
      for (let i = length - 1; i >= newStart + deleteCount; i--) {
        this[i + (items.length - deleteCount)] = this[i];
      }
    }
  }

  for (let i = 0; i < items.length; i++) {
    this[newStart + i] = items[i];
  }

  this.length = length - deleteCount + items.length;

  return deletedItems;
};

Array.prototype.toString = function () {
  if (this instanceof Array) {
    return this.join(","); //return new array.
  } else {
    //ensure Object.prototype.toString()
    return Object.prototype.toString.call(this);
  }
};

Array.prototype.unshift = function (...element) {
  //return calculated length
  //change existing array

  let temp = [...this];

  for (let i = 0; i < element.length; i++) {
    this[i] = element[i];
  }

  for (let i = 0; i < this.length; i++) {
    this[i + element.length] = temp[i];
  }

  return this.length;
};
