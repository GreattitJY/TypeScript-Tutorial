# TypeScript Rest Parameters.

A rest parameter allows you a function to accept zero or more arguments of the specified type. In TypeScript, rest parameters follow thes rules:

- A function has only one rest parameter.
- The rest parameter appears last in the parameter list.
- The type of the rest parameter is an `array type`.

To declare a rest paremter,, you prefix the parameter name with three dots and use the array type as the type annotation:

```ts
function fn(...rest: type[]) {
  //...
}
```

```ts
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}
```

```ts
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); //30
console.log(getTotal(10, 20, 30)); // 60
```
