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
  for (const [mapKey, _] of this) {
    if (key === mapKey) {
      return true;
    }
  }

  return false;
};
