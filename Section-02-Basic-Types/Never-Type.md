# TypeScript never Type

The `never` type is a type that contains no values. Because of this, you cannot assign any value to a variable with a `never` type.

Typically, you use the `never` type to represent the return type of a function always throws an error. For example:

```ts
function rasiseError(message: string): never {
  throw new Error(message);
}
```

The return type of the following function is inferred to the `never` type:

```ts
function reject() {
  return raiseError("Rejected");
}
```

If you have a function expression that contains an indefinite loop, its return type is alos the `never` type. For example:

```ts
let loop = function forever() {
  while (true) {
    console.log("hello");
  }
};
```

In this example, the type of the return type of the `forever()` function is `never`.

If you see that the return type of a function is `never`, then you should ensure that it is not what you intended to do.

Variables can also acquire the `never` type when you narrow its type by a type guard that can never be true.

For example, without the `never` type, the following function causes an error because not all code paths return a value.

```ts
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
}
```

To make the code valid, you can return a function whose return type is the `never` type.

```ts
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }

  // make the function valid
  return neverOccur();
}

let neverOccur = () => {
  throw new Error("Never!");
};
```
