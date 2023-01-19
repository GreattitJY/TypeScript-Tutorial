function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
  if (c) return a + b + c;
  return a + b;
}

console.log(sum(1, 2, 3));

class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}
let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
console.log(counter.count()); // return a number
console.log(counter.count(1)); // return an empty array
console.log(counter.count()); // return a number
