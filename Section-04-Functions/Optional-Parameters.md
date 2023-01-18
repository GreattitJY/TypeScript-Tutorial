# TypeScript Optional Parameters

In JavaScript, you can call a function without passing any arguments even though the function specifies parameters. Therefore, JavaScript supports the optional parameters by default.

In TypeScript, the compiler checks every function call and issues an error in the following cases:

- The number of arguments is different from the number of parameters specified in the function.
- Or the types of arguments are not compatible with the types of function parameters

Because the compiler thoroughly checks the passing arguments, you need to annotae optional parameters to instruct the compiler not to issue an error when you omit the arguments

To make a function parameter optional, you use the `?` after the parameter name.

```ts
function multifly(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}
```

How it works:

- First, use the `?` after the `c` parameter.
- Second, check if the argument is passed to the function by using the expression `typeof c !== 'undefined'`.

> Note that if you use the expression `if(c)` to check if an argument is not initalized, you would find that the empty string or zeor would be treated as `undefined`.

The optional prameters must appear after the paramters required in the parameter list.

Fore example, if you make the `b` parameter optional, and `c` parameter required the TypeScript compiler will issue an error:

```ts
function mulitply(a: number, b?: number, c: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}
```

Error:

```ts
error TS1016: A required parameter cannot follow an optional parameter.
```
