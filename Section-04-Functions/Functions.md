# TypeScript Functions

## Introduction to TypeScript functions

TypeScript functions are the building blocks of readable, maintainable, and reusable code.

Like JavaScript, you use the `function` keyword to declare a function in TypeScript:

```ts
function name(parameter: type, parameter:type,...): returnType {
  //do something
}
```

Unlike JavaScript, TypeScript allows you to use type annotations in parameters and return value of a function.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

In this example, the `add()` function accepts two parameters with the `number` type.

When you call the `add()` function, the TypeScript compiler will check each argument passed to the function to ensure that they are numbers.

```ts
let sum = add("10", "20");
```

Error:

```ts
error TS2345: Argument of type '"10"' is not assignalbe to parmeter of type 'number'
```

If a function does not return value, you can use the `void` type as the return type. The `void` keyword indicates that the function doesn't return any value.

```ts
function echo(message: string): void {
  console.log(message.toUpperCase());
}
```

The `void` prevents the code inside the function from returning a value and stops the calling code from assigning the result of the function to varibale.

When you do not annotate the return type, TypeScript will try to infer an appropriate type.

```ts
function add(a: number, b: number) {
  return a + b;
}
```

In this example, the TypeScript complier tries to infer the return type of the `add()` function `number` type, which is expected.

However, if a function has different branches that return different types, the TypeScript compiler may infer the `union` type or `any` type.

Therefore, it is important to add type annotations to a function as much as possible.
