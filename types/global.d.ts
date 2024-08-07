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
