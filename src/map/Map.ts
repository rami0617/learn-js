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
