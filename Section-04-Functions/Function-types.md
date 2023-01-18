# TypeScript Function Types

## Introduction to TypeScript function types

A function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts with the following syntax:

```ts
(parameter: type, parameter:type, ...) => type
```

The following example shows how to declare a variable which has a function that accepts two numbers and returns a number:

```ts
let add: (x: number, y: number) => number;
```

In this example:

- The function type accepts two arguments: `x` and `y` with the type `number`.
- The type of the return value is `number` that follows the fat arrow (=>) appeared between parameters and return type.

Once a annotating a variable with a function type, you can assign the function with the same type to the vaiable.

TypeScript compiler will match the number of parameters with their types and the return type.

```ts
add = function (x: number, y: number) {
  return x + y;
};
```

Also, you can declare a variable and assign a function to variable like this:

```ts
let add: (a: number, b: number) => number = function (x: number, y: number) {
  return x + y;
};
```

If you assign other functions whose type doesn't match to the `add` variable, TypeScript will issue an error:

```ts
add = function (x: string, y: string): number {
  return x.concat(y).length;
};
```

In this example, we reassigned a function, whose type doesn't match, to the `add` function variable.

## Inferring function types

TypeScript compiler can figure out the function type when you have the type on one side of the equation. This form of type inference is called contextual typing.

```ts
let add = function (x: number, y: number): number {
  return x + y;
};
let result = add(10, 20); // hover 시 let add: (x: number, y: number) => number
```

In this example, the `add` function will take the type `(x: number, y: number) => number`.

By using the type inference, you can significantly reduce the amount of code with annotations.
