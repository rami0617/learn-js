//discretionary create item object

Set.prototype.add = function <T>(value: T) {
  if (!this.item.has(value)) {
    this.item.push(value);
  }

  return this;
};

Set.prototype.clear = function (): void {
  this.item = [];
};

Set.prototype.delete = function <T>(value: T): boolean {
  const index = this.item.indexOf(value);

  if (index !== -1) {
    this.items.splice(index, 1);

    return true;
  }

  return false;
};

Set.prototype.difference = function <T>(other: Set<T>): Set<T> {
  const newSet: Set<T> = new Set();

  for (let i = 0; i < this.length; i++) {
    if (!other.has(this[i])) {
      newSet.add(this[i]);
    }
  }

  return newSet;
};

Set.prototype.entries = function* <T>(): IterableIterator<[T, T]> {
  for (const [_, value] of this) {
    yield [value, value];
  }
};

Set.prototype.forEach = function <T>(
  callbackFn: (value: T, key: T, set: Set<T>) => void,
  thisArg?: any
) {
  for (const [key, value] of this) {
    callbackFn.call(thisArg, value, key, this);
  }
};

Set.prototype.has = function <T>(value: T): boolean {
  for (const [_, setValue] of this) {
    if (value === setValue) {
      return true;
    }
  }

  return false;
};

Set.prototype.intersection = function <T>(other: Set<T>): Set<T> {
  const result: Set<T> = new Set();

  for (const value of other) {
    if (this.has(value)) {
      result.add(value);
    }
  }

  return result;
};

Set.prototype.isDisjointFrom = function <T>(other: Set<T>): boolean {
  for (const value of other) {
    if (this.has(value)) {
      return false;
    }
  }

  return true;
};

Set.prototype.isSubsetOf = function <T>(other: Set<T>): boolean {
  if (this.size > other.size) return false;

  for (const value of this) {
    if (!other.has(value)) {
      return false;
    }
  }

  return true;
};

Set.prototype.isSupersetOf = function <T>(other: Set<T>): boolean {
  if (this.size < other.size) return false;

  for (const value of other) {
    if (!this.has(value)) {
      return false;
    }
  }

  return true;
};

Set.prototype.keys = function* <T>(): IterableIterator<T> {
  for (const key of this) {
    yield key;
  }
};

Set.prototype.symmetricDifference = function <T>(other: Set<T>): Set<T> {
  function help(set, otherSet) {
    const result: Set<T> = new Set();

    for (const value of set) {
      if (!otherSet.has(value)) {
        result.add(value);
      }
    }

    return result;
  }

  const set = this.size >= other.size ? this : other;
  const otherSet = this.size < other.size ? other : this;

  return help(set, otherSet);
};

Set.prototype.union = function <T>(other: Set<T>): Set<T> {
  return new Set([...this, ...other]);
};

Set.prototype.values = function* <T>(): IterableIterator<T> {
  for (const value of this) {
    yield value;
  }
};
