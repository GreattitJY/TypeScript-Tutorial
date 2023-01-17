# TypeScript Type Aliases

## Introduction to TypeScript type aliases

Type aliases allow you to create a new name for an existing type. The following shows the syntax of the type alias:

```ts
type alias = existingType;
```

The existing type can be any valid TypeScript type.

The following example use the type alias chars for the string type:

```ts
type chars = string;
let message = chars; // same as string type
```

It's useful to create type aliases for union types. For example:

```ts
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi' // valid
input false // Compiler error
```
