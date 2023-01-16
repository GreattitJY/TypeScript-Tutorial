# TypeScript void Type

## Introduction to TypeScript void type

The `void` type denotes the absence of hanvig any type at all. It is a little like the opposite of the `any` type.

Typically, you use the `void` type as the return type of fucntions that do not return a value. For example:

```ts
function log(message): void {
  console.log(message);
}
```

It is a good practice to add the `void` type as the return type of a function or a method that doesn't return any value. By doing this, you can gain the follwing benefits:

- Improve clarity of the code: you do not have to read the whole function body to see if it returns anything.

- Ensuer type-safe: you will never assign the function with the `void` return type to a variable.

Notice that if you use the `void` type for a variable, you can only assign `undefined` to that variable. In this case, the `void` type is not useful. For example:

```ts
let useless: void = undefined;
useless = 1; // error
```

If the `--strictNullChecks` flag is not specified, you can assign the `useless` to `null`

```ts
useless = null; // OK if --strictNullChecks is not specified
```
