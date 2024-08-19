//discretionary create item object

Set.prototype.add = function (value) {
  if (!this.item.has(value)) {
    this.item.push(value);
  }

  return this;
};

Set.prototype.clear = function (): void {
  this.item = [];
};

Set.prototype.delete = function (value): boolean {
  const index = this.item.indexOf(value);

  if (index !== -1) {
    this.items.splice(index, 1);

    return true;
  }

  return false;
};

Set.prototype.difference = function (other) {
  const newSet = new Set();

  for (let i = 0; i < this.length; i++) {
    if (!other.has(this[i])) {
      newSet.add(this[i]);
    }
  }

  return newSet;
};

Set.prototype.entries = function* () {
  for (const [_, value] of this) {
    yield [value, value];
  }
};

Set.prototype.forEach = function (
  callbackFn: (value, key, set) => void,
  thisArg?: any
) {
  for (const [key, value] of this) {
    callbackFn.call(thisArg, value, key, this);
  }
};

Set.prototype.has = function (value) {
  for (const [setKey, setValue] of this) {
    if (value === setValue) {
      return true;
    }
  }

  return false;
};

Set.prototype.intersection = function (other) {
  const result = new Set();

  for (const [_, value] of other) {
    if (this.has(value)) {
      result.add(value);
    }
  }

  return result;
};

Set.prototype.isDisjointFrom = function (other) {
  for (const [_, value] of other) {
    if (this.has(value)) {
      return false;
    }
  }

  return true;
};

Set.prototype.isSubsetOf() = function (other) {
  if (this.size > other.size) return false;

  for (const [_, value] of this) {
    if (!other.has(value)) {
      return false;
    }
  }

  return true;
};

Set.prototype.isSupersetOf() = function (other) {
  if (this.size < other.size) return false;

  for (const [_, value] of other) {
    if (!this.has(value)) {
      return false;
    }
  }

  return true;
};

Set.prototype.keys = function* () {
  for (const key of this) {
    yield key;
  }
};

Set.prototype.symmetricDifference = function (other) {
  function help(set, otherSet) {
    const result = new Set();

    for (const [_, value] of set) {
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

Set.prototype.union = function (other) {
  return new Set([...this, ...other]);
};

Set.prototype.values = function* () {
  for (const [_, value] of this) {
    yield value;
  }
};
