Map.prototype.clear = function (): void {
  const keys = Array.from(this.keys());

  for (const key of keys) {
    this.delete(key);
  }
};
