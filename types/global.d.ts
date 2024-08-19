interface String {
  at(index: number): string | undefined;
  chartAt(index: number): string;
  charCodeAt(index: number): number;
  concat(...strings: string[]): string;
  endsWith(searchString: string, length?: number): boolean;
  includes(searchString: string, position?: number): boolean;
  indexOf(searchString: string, fromIndex?: number): number;
  lastIndexOf(searchString: string, fromIndex?: number): number;
  localeCompare(compareString: string): number;
  match(regExp: RegExp): RegExpMatchArray | null;
  padEnd(targetLength: number, fillString?: string): string;
  padStart(targetLength: number, fillString?: string): string;
  repeat(count: number): string;
  replace(searchValue: string | RegExp, replacement: string): string;
  replaceAll(pattern: string | RegExp, replacement: string): string;
  search(regexp: RegExp): number;
  slice(indexStart: number, indexEnd?: number): string;
  split(separator: string, limit?: number): string[];
  startsWith(searchString: string, position?: number): boolean;
  substring(indexStart: number, indexEnd?: number): string;
  toLowerCase(): string;
  toString(): string;
  trim(): string;
  valueOf(): string;
}

interface Array<T> {
  at(index: number): T | undefined;
  concat(...values: (T | ConcatArray<T>)[]): T[];
  copyWithin(target: number, start: number, end?: number): T[];
  entries(): IterableIterator<[number, T]>;
  every(
    callBackFn: (element: T, index: number, array: T[]) => boolean,
    thisArg?: any
  ): boolean;
  fill(value: T, start?: number, end?: number): T[];
  filter(
    callBackFn: (element: T, index: number, array: any[]) => boolean,
    thisArg?: any
  ): T[];
  find(
    callBackFn: (element: T, index: number, array: any[]) => boolean,
    thisArg?: any
  ): T | undefined;
  findIndex(
    callBackFn: (element: T, index: number, array: any[]) => boolean,
    thisArg?: any
  ): number;
  findLast(
    callBackFn: (element: T, index: number, array: any[]) => boolean,
    thisArg?: any
  ): T | undefined;
  findLastIndex(
    callBackFn: (element: T, index: number, array: any[]) => boolean,
    thisArg?: any
  ): number;
  flat(depth: number): T[];
  flatMap(
    this: T[],
    callBackFn: (element: T, index: number, array: any[]) => any,
    thisArg?: any
  ): T[];
  forEach(
    this: T[],
    callBackFn: (element: T, index: number, array: any[]) => any,
    thisArg?: any
  ): void;
  includes(searchElement: T, fromIndex?: number): boolean;
  indexOf(searchElement: T, fromIndex?: number): number;
  join(separator: string): string;
  keys(): IterableIterator<number>;
  lastIndexOf(searchElement: T, fromIndex?: number): number;
  map(
    callBackFn: (element: T, index: number, array: T[]) => any,
    thisArg?: any
  ): T[];
  pop(): T | undefined;
  push(...element: T[]): number;
  reduce(
    callbackFn: (
      accumulator: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => any,
    initialValue?: T
  ): T;
  reduceRight(
    callbackFn: (
      accumulator: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => any,
    initialValue?: T
  ): T;
  reverse(): T[];
  shift(): string | undefined;
  slice(start?: number, end?: number): T[];
  some(
    callBackFn: (element: T, index: number, array: T[]) => boolean,
    thisArg?: any
  ): boolean;
  sort(compareFn?: (a: T, b: T) => any): T[];
  splice(start: number, deleteCount?: number): T[];
  toString(): string;
  unshift(...element: T[]): number;
  values(): IterableIterator<T>;
  with(index: number, value: T): T[];
}

interface Object {
  hasOwnProperty(prop: string | symbol | number): boolean;
  isPrototypeOf(object: Object): boolean;
  propertyIsEnumerable(prop: string | number | symbol): boolean;
}

interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  entries(): IterableIterator<[K, V]>;
  forEach(
    callbackFn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  keys(): IterableIterator<K>;
  values(): IterableIterator<V>;
  set(key: K, value: V): Map<K, V>;
}

interface Set<T> {
  add(value: T): this;
  clear(): void;
  delete(value: T): boolean;
  difference(other: Set<T>): Set<T>;
  entries(): IterableIterator<[T, T]>;
  forEach(
    callbackFn: (value: T, key: T, set: Set<T>) => void,
    thisArg?: any
  ): void;
  has(value: T): boolean;
  intersection(other: Set<T>): Set<T>;
  isDisjointFrom(other: Set<T>): boolean;
  isSubsetOf(other: Set<T>): boolean;
  isSupersetOf(other: Set<T>): boolean;
  keys(): IterableIterator<T>;
  symmetricDifference(other: Set<T>): Set<T>;
  union(other: Set<T>): Set<T>;
  values(): IterableIterator<T>;
}
