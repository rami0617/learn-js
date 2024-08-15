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
