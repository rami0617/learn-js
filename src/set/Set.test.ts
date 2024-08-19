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

describe("5. Set.prototype.entries", () => {
  const set = new Set();

  set.add(1);
  set.add(2);

  test("1) should return new iterator object.", () => {
    expect(set.entries().next().value).toMatchObject([1, 1]);
  });
});

describe("6. Set.prototype.forEach", () => {
  const set = new Set();

  test("1) should return undefined", () => {
    expect(set.forEach((value) => value)).toBeUndefined();
  });
});

describe("7. Set.prototype.has", () => {
  const set = new Set();
  set.add(1);

  test("1) should return true if an element with sepcified value exists in Set object.", () => {
    expect(set.has(1)).toBeTruthy();
  });

  test("2) should return false if an element with sepcified value not exists in Set object.", () => {
    expect(set.has(2)).toBeFalsy();
  });
});

describe("8. Set.prototype.intersection", () => {
  const set = new Set();
  set.add(1);
  set.add(2);

  test.skip("1) should return new Set Object containing element in both this set and the other set.", () => {
    const other = new Set();
    other.add(1);

    expect(set.intersection(other)).toBe(new Set().add(1));
  });
});

describe("9. Set.prototype.isDisjointFrom", () => {
  const set = new Set();
  set.add(1);
  set.add(2);

  test.skip("1) should return true if this set has no elements in common with the other set.", () => {
    const other = new Set();

    expect(set.isDisjointFrom(other)).toBeTruthy();
  });

  test.skip("2) should return false if this set has elements in common with the other set.", () => {
    const other = new Set();
    other.add(1);

    expect(set.isDisjointFrom(other)).toBeFalsy();
  });
});

describe("10. Set.prototype.isSubsetOf", () => {
  const set = new Set();
  set.add(1);
  set.add(2);

  test.skip("1) should return true if this have all element in other Set.", () => {
    const other = new Set();
    other.add(1);

    expect(set.isSubsetOf(other)).toBeTruthy();
  });

  test.skip("2) should return false if there are more elements in this than other.size.", () => {
    const other = new Set();
    other.add(1);
    other.add(2);
    other.add(3);

    expect(set.isSubsetOf(other)).toBeFalsy();
  });
});
