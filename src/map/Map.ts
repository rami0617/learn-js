Map.prototype.clear = function (): void {
  const keys = Array.from(this.keys());

  for (const key of keys) {
    this.delete(key);
  }
};

Map.prototype.delete = function <K>(key: K): boolean {
  if (this.has(key)) {
    delete this[key];
    this.size--;

    return true;
  }

  return false;
};

Map.prototype.entries = function* <K, V>(): IterableIterator<[K, V]> {
  for (const [key, value] of this) {
    yield [key, value];
  }
};

Map.prototype.forEach = function <K, V>(
  callbackFn: (value: V, key: K, map: Map<K, V>) => void,
  thisArg?: any
) {
  for (const [key, value] of this) {
    callbackFn.call(thisArg, value, key, this);
  }
};

Map.prototype.get = function <K, V>(key: K): V | undefined {
  for (const [mapKey, mapValue] of this) {
    if (key === mapKey) {
      return mapValue;
    }
  }

  return undefined;
};

Map.prototype.has = function <K>(key: K): boolean {
  for (const mapKey of this) {
    if (key === mapKey) {
      return true;
    }
  }

  return false;
};

Map.prototype.keys = function* <K>(): IterableIterator<K> {
  for (const key of this) {
    yield key;
  }
};

Map.prototype.values = function* <V>(): IterableIterator<V> {
  for (const [_, value] of this) {
    yield value;
  }
};

Map.prototype.set = function <K, V>(key: K, value: V): Map<K, V> {
  this[key] = value;

  return this;
};
