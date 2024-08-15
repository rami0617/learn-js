describe("1. Set.prototype.add", () => {
  const set = new Set();

  test("1) should inserts a new element with a specified value in to this set, ", () => {
    set.add(1);

    expect(set.has(1)).toBeTruthy();
    expect(set.has(2)).toBeFalsy();
  });

  test("2) should not insert if there isn't an element with the same value already in this set.", () => {
    set.add(1);
    set.add(1);

    expect(set.size).not.toBe(2);
  });
});
