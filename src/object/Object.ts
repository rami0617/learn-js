Object.prototype.hasOwnProperty = function (
  prop: string | symbol | number
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

Object.prototype.isPrototypeOf = function (object: Object): boolean {
  if (this === null || this === undefined) {
    throw new TypeError(
      "'Cannot read property 'isPrototypeOf' of null or undefined'"
    );
  }

  let proto = Object.getPrototypeOf(object);

  while (proto !== null) {
    if (proto === this) {
      return true;
    }

    proto = Object.getPrototypeOf(proto);
  }

  return false;
};

Object.prototype.propertyIsEnumerable = function (
  prop: string | number | symbol
): boolean {
  return Object.getOwnPropertyDescriptor(this, prop)?.enumerable ?? false;
};
