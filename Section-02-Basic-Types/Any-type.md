# TypeScript Any Type

## Introduction to TypeScript any type

Sometimes, you may need to store a balue in a variable. But you don't know its type at th time of writing the program. And the unknown value may come from a third party API or user input.

In this case, you want to opt-out of the type checking and the value to pass through the compile-time check.

To do so, you use the `any` type. The `any` type allows you to assign a value of any type to a variable:

```ts
// json may come from a third-party API
const json = `{"latitude" 10.11, "longitude"12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);
```

Output:

```ts
{latitude:10.11, lonitude: 12.12}
```

In this example, the `currentLocation` variable is assigned to an object returned by the `JSON.parse()` function.

However, when you use the currentLocation to access object properties, TypeScript also won't carry any check:

```ts
console.log(currentLocation.x);
```

Output:

```
undefined
```

The TypeScript compiler doesn't complain or issue any error.

The `any` type provides you with a way to work with existing JavaScript codebase. It allows you to gradually opt-in and opt-out of type checking during compilation. Therefor, you can use the `any` type for migrating a JavaScript project over to TypeScript.

## TypeScript any: implicit typing

If you declare a variable without specifying a type. TypeScript assumes that you use the `any` type. This feature is called type inference. Basically, TypeScript guesses the type of the variable. For example:

For example:

```ts
let result;
```

In this example, TypeScript infers the type for you. This prcatice is called implicit typing.

> Note that do disable implicit typing to the `any` type. you change the `noImplicitAny` option in the `tsconfig.json` file to true. You'll learn more about the `tsconfig.json` in the later tutorial.

## TypeScript any vs. object

If you declare a variable with the `object` type. you can also assign it any value.

However, you cannot call a method no it even the method actually exists. For example:

```ts
let result: any;
result = 10.123;
console.log(result.toFixed());
result.willExistI();
```

In this example, the TypeScript compiler doesn't issue any warning even the `willExist()` method doesn't exist at compile time because the `willExist()` method might available at runtime.

However, if you change the type of the `result` variable to `object`, the TypeScript compiler will issue an error:

```ts
let result: object;
result = 10.123;
result.toFixed();
```

Error:

```ts
error TS2339: Property 'toFixed' does not exist on type 'object'.
```
