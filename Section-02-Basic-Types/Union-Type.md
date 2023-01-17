TypeScript union Type

# TypeScript union Type

## Introduction to TypeScript union type

Sometimes, you will run into a function that expects a parameter that is either a number or a string.

```ts
function add(a: any, b: any) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "sting" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}
```

In this example, the `add()` function will caculate the sum of its parameters if they are numbers.

In case the parameters are strings, the `add()` function will concatenate them into a single string.

If the parameters are neither numbers nor strings, the `add()` function throws an error.

The problem with the parameters of the `add()` function is that its parameters have the `any` type. It means that you can call the function with arguments that are neither numbers nor strings, the TypeScript will be fine with it.

This code will be compiled succeessfully but cause an error at runtime:

```ts
add(true, false);
```

To resolve this, you can use the TypeScript union type. The union type allows you yo combine multiple types into one type.

For example, the following vaiable is of type `number` of `string`:

```ts
let reuslt: number | string;
result = 10; // ok
result = "Hi"; // also OK
result = false; // a boolean value, not OK
```

A union type describes a value that can be one of several types, not just tow. For example `number | string | boolean` is the type of a value that can be a number, a string, or a boolean.

Back to the `add()` function example, you can change the types of the parameters from the `any` to union like this:

```ts
function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "sting" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}
```
