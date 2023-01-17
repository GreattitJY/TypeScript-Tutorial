# TypeScript String Literal Types

The string literal types allow you to define a type that accepts only one specified string literal.

The following defines a string literal type that accepts a literal string `'click'`:

```ts
let click: "click";
```

The `click` is a string literal type that accepts only the string literal `'click'`. If you assign the literal string `click` to the `click`, it will be valid:

```ts
click = "click"; // valid
```

However, when you assign another string literal to the `click`, the TypeScript compiler will issue an error.

```ts
click = "dblclick"; // compiler error
```

Error:

```ts
Type '"dblclick"' is not assignalbe to type '"click"'.
```

The string literal type is usesful to limit a possible string value in a variable.

The string literal types can combine nicely with the `union types` to define a finite set of string literal values for a variable:

```ts
let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
mouseEvent = "mouseover"; // compiler error
```

If you use the string literal types in multiple places, they will be very verbose.

To avoid this, you can use the type aliases. For example:

```ts
type MouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
let mouseEvent: MouseEvent;
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
mouseEvent = "mouseover"; // compiler error

let anotherEvent: MouseEvent;
```
