export namespace generic {
  export function add<T>(x: T, y: T): string | number | null {
    const a = typeof x === "string" && typeof y === "string";
    const int = typeof x === "number" && typeof y === "number";
    if (a) {
      return x + y;
    } else if (int) {
      return x + y;
    } else {
      return null;
    }
  }
  interface Array<T> {
    map<U>(
      callbackfn: (value: number, index: number, array: number[]) => number,
      thisArg?: any
    ): U[];
  }
}
type ab = [n: number];
const index: ab = [0];
console.log(index);

const a = ["1", "2", "3"];
const b = ["4"];
a.concat(b);
