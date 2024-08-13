Object.prototype.hasOwnProperty = function (
  prop: string | Symbol | number
): boolean {
  const keys = [
    ...Object.getOwnPropertyNames(this),
    ...Object.getOwnPropertySymbols(this),
  ];

  if (keys.includes(prop)) {
    return true;
  }

  let proto = Object.getPrototypeOf(this);

  while (proto !== null) {
    const protoProps = [
      ...Object.getOwnPropertyNames(proto),
      ...Object.getOwnPropertySymbols(proto),
    ];

    if (protoProps.includes(prop)) {
      return true;
    }

    proto = Object.getPrototypeOf(proto);
  }

  return false;
};
