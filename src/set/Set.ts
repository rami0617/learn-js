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
