# TypeScript Type Inference

Type inference describes where and how TypeScript infers when you don't explicitly annotate them.

## Basic type inference

when you declare a vaiable, you can use a type annotation to explicitly sepcify a type for it.

```ts
lete counter: number;
```

However if you initialize the `counter` varaible to a number, TypeScript will infer the type the `counter` to be `number`

```ts
let counter = 0;
```

It is equivalent to the follwing statemnet:

```ts
let counter: number = 0;
```

Likewise, when you assign a function parameter a balue, TypeScript infers the type of the parameter to the type of the default value.

```ts
function setCounter(max = 100) {
  //...
}
```

Similarly, TypeScript infers the following return type of the `increment()` function as `number`:

```ts
function increment(counter: number) {
  return counter++;
}
```

It is the same as:

```ts
function increment(counter: number): number {
  return counter++;
}
```

## The best common type algorithm

Consider the following assignment:

```ts
let items = [1, 2, 3, null];
```

To infer the type of `items` variable, TypeScript needs to consider the type of each element in the array.

It uses the best common type algorithm to analyze each candidate type and select the type that is compatible with all other candidates.

In this case, TypeScript selects the number `array type` (`number[]`) as the best common type.

If you add a string to the `items` array, TypeScript will infer the type for the items as an array of numbers and strings: `(number | string)[]`

```ts
let items = [0, 1, null, "Hi"];
```

When TypeScript cannot find the best common type, it returns the union array type. For example:

```ts
let arr = [new Date(), new RegExp("\\d+")];
```

In this example, TypeScript infers the type for `arr` to be `(RegExp | Date)[].`

## Contextual typing

TypeScript uses locations of variables to infer their types. This mechanism is known as contextual typing. For example:

```ts
document.addEventListner("click", function (evnet) {
  console.log(event.button);
});
```

In this example, TypeScript knows that the `event` parameter is an instance of `MouseEvent` because of the `click` event.

However, when you change the `click` event to the `scroll` event, TypeScript will issue an error:

```ts
document.addEventListner("scroll", function (evnet) {
  console.log(event.button); // compiler error
});
```

Error:

```ts
Property 'button' does not exis on type 'Event'.(2339)
```

TypeScript knows that the `event` in this case, is an instance of `UIEvent`, not a `MouseEvent`. And `UIEvent` does not have the `button` property, therefore, TypeScript throws an error.

You will find contextual typing in may cases such as arguments to function calls, type assertions, members of objects and array literals, return statements, and rigth-hand sides of assignments.

## Type inference vs. Type annotations

The following show the difference between type inference and type annotations:

| Type inference              | Type annotations                         |
| :-------------------------- | :--------------------------------------- |
| TypeScript guesses the type | You expilicitly tell TypeScript the type |

So, when do you use type inference and type annotations?

In practice, you should always use the type inference as much as possible. And you use the type annotation in the folowing cases:

- When you declare a vaiable and assign it a value later
- When you want a vaiable that can't be inferred.
- When a function returns the `any` type and you need to clarify the value.
