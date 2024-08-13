describe("1. Object.prototype.hasOwnProperty", () => {
  const object = { a: 1, b: { c: 3 } };

  test("1) if object have property, return true.", () => {
    expect(object.hasOwnProperty("a")).toBeTruthy();
    expect(object.hasOwnProperty("b")).toBeTruthy();
  });
});

describe("2. Object.prototype.isPrototypeOf", () => {
  function Parent() {}
  function Child() {}
  function Neighbor() {}

  Child.prototype = Object.create(Parent.prototype);

  const childInstance = new Child();

  test("1) should return true if the object is in the prototype chain.", () => {
    expect(Parent.prototype.isPrototypeOf(childInstance)).toBeTruthy();
    expect(Child.prototype.isPrototypeOf(childInstance)).toBeTruthy();
  });

  test("2) should return false if the object is in the prototype chain.", () => {
    expect(Neighbor.prototype.isPrototypeOf(childInstance)).toBeFalsy();
  });
});

describe("3. Object.prototype.propertyIsEnumerable", () => {
  test("1) should return true for an enumerable own property.", () => {
    const object = {
      hello: "world",
      a: { b: "c" },
    };

    expect(object.propertyIsEnumerable("hello")).toBeTruthy();
    expect(object.propertyIsEnumerable("a")).toBeTruthy();
  });

  test("2) should return false for a non-enumerable own property.", () => {
    const object = {};
    Object.defineProperty(object, "a", {
      value: 1,
      emurable: false,
    });

    expect(object.propertyIsEnumerable("a")).toBeFalsy();
  });
});
