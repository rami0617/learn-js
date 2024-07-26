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

Array.prototype.every = function (callBackFn: () => void, thisArg?: any) {
  for (let i = 0; i < this.length; i++) {
    if (!callBackFn.call(thisArg, this[i], i, this)) {
      return false;
    }
  }

  return true;
};
