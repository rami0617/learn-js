Map.prototype.clear = function (): void {
  const keys = Array.from(this.keys());

  for (const key of keys) {
    this.delete(key);
  }
};

Map.prototype.delete = function (key): boolean {
  if (this.has(key)) {
    delete this[key];
    this.size--;

    return true;
  }

  return false;
};

Map.prototype.entries = function* () {
  for (const [key, value] of this) {
    yield [key, value];
  }
};

Map.prototype.forEach = function (
  callbackFn: (value, key, map) => void,
  thisArg
) {
  for (const [key, value] of this) {
    callbackFn.call(thisArg, value, key, this);
  }
};

Map.prototype.get = function (key) {
  for (const [mapKey, mapValue] of this) {
    if (key === mapKey) {
      return mapValue;
    }
  }

  return undefined;
};

Map.prototype.has = function (key) {
  for (const mapKey of this) {
    if (key === mapKey) {
      return true;
    }
  }

  return false;
};

Map.prototype.keys = function* () {
  for (const key of this) {
    yield key;
  }
};

Map.prototype.values = function* () {
  for (const [_, value] of this) {
    yield value;
  }
};

Map.prototype.set = function (key, value) {
  this[key] = value;

  return this;
};
