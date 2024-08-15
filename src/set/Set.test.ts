describe("1. Set.prototype.add", () => {
  const set = new Set();

  test("1) should inserts a new element with a specified value in to this set.", () => {
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

describe("2. Set.prototype.clear", () => {
  const set = new Set();

  set.add(1);

  test("1) should removes all elements from this set.", () => {
    set.clear();

    expect(set.has(1)).toBeFalsy();
    expect(set.size).toBe(0);
  });
});

describe("3. Set.prototype.delete", () => {
  const set = new Set();

  set.add(1);
  set.add(2);

  test("1) should removes a specified value from this set.", () => {
    set.delete(1);

    expect(set.size).toBe(1);
    expect(set.has(1)).not.toBeTruthy();
  });
});

describe("4. Set.prototype.difference", () => {
  const set = new Set();

  set.add(1);
  set.add(2);

  test.skip("1) should takes a set and returns a new set containing elements in this set but not in the given set.", () => {
    const otherSet = new Set().add(1);
    const newSet = new Set().add(2);

    expect(set.difference(otherSet)).toBe(newSet);
  });
});
