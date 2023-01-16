# TypeScript Tuple

## Introduction to TypeScript Tuple type

A tuple works like an array with some additional considerations:

- The number of elements in the tuple is fixed.
- The types of elements are known, and need not be the same.

For example, you can use a tuple to represent a value as a pair of a `string` and a `number`:

```ts
let skill: [string, number];
skill = ["programming", 5];
```

The order of values in a tuple is important. If you change the order of values of the `skill` tuple to `[5, "programming]`, you'll get an error:

```ts
let skill: [string, number];
skill = [5, "programming"];
```

Error:

```ts
error TS2322: Type 'string' is not assignable to type 'number'
```

For this reason, it`s a good practice to use tuples with data that is related to each other in a specific order.

For example, you can use a tuple to define an RGB color that always comes in a three-number pattern:

```ts
r, g, b;
```

For exapmle:

```ts
let color: [number, number, number] = [255, 0, 0];
```

The `color[0]`. `color[1]`, and `color[2]` would be logicially map to `Red`, `Green` and `Blue` color values.

## Optioanl Tuple Elements

Since TypeScript 3.0, a tuple can have optional elements specified using the question mark (?) postfix.

For example, you can define an RGBA tuple with the optional alpha channel value:

```ts
let bgColor, haederColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
```

> Note that the RGBA defines colors using the red, green, blue, and alpha model. The alpha specifies the opacity of the color.
