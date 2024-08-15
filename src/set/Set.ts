Set.prototype.add = function (value) {
  if (!this.has(value)) {
    this.push(value);
  }

  return this;
};
