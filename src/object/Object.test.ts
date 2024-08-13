describe("1. Object.prototype.hasOwnProperty", () => {
  const object = { a: 1, b: { c: 3 } };

  test("1) if object have property, return true.", () => {
    expect(object.hasOwnProperty("a")).toBeTruthy();
    expect(object.hasOwnProperty("b")).toBeTruthy();
  });
});
