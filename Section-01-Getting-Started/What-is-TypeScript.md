# What is TypeScript

TypeScript is a super set of JavaScript

TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.

Once you have the plain JavaScript code, you can deploy it to any enviornments that JavaScript runs.

TypeScript uses the JavaScript syntaxes adn adds additional syntaxes for supportin Types.

if you have a JavaScript program that doesn`t have any syntax errors, it is also a TypeScript

## Why TypeScript

<hr>

- Introduce optional types to JavaScript
- Implement planned features of future JavaScript, a.k.a ECMAScript Next or ES next to the current JavaScript

<br>

### 1. TypeScript improves your productivity while helping avoid bugs

<hr>

By using types, you can catch bugs at the compile-time intead of having them occuring at runtime.

```js
function add(x, y) {
  return x + y;
}
```

if you get values from HTML input elements and pass them into the fuction, you may get an unexpected result:

```js
let result = add(input1.value, input2.value);
console.log(result); // result of concatenating strings
```

when you use TypeScript to explicitly specify the type for the parameters like this:

```ts
function add(x: number, y: number) {
  return x + y;
}
```

In this funtion, we added the number types to the parameters. The function add() will accept only numbers, not any other values.

```ts
let result = add(input1.valute, intput2.value);
```

the TypeScript compiler will issue an error if you compile the TypeScript code into JavaScript. Hence, you can prevent the error from happening at runtime.

### 2. TypeScript brings the future JavaScript to today

you cant use the new JavaScript features befoe web browers (or other environments) fully support them.

Every year, TC39 releases several new features for ECMAScript, which is the standard of JavaScript. The feature proppsals typically go through five stage:

- Stage 0: Strawperson
- Stage 1: Proposal
- Stage 2: Draft
- Stage 3: Candidate
- Stage 4: Finished

And TypeScript generally supports features that are in the stage 3.
