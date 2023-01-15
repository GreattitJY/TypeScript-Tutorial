# TypeScript Number

All numbers in TypeScript are either foloating-point values or big intergers. The floating-poing numbers have the type `number` while the integers get the type `bigint`.

## The number type

The following shows how to declare a variable that holds a floating-point value:

```ts
let price: number;
```

Or you can initialize the price variable to a number:

```ts
let price = 9.95;
```

As in JavaScript, TypeScript supports the number literals for decimal, hexadecimal, binary, and octaliterals:

### Deciaml Numbers

```ts
let counter: number = 0;
let x: number = 100;
let y: number = 200;
```

### Binary Numbers

The binary numbers uses a leading zero followed by a lowercase or uppercase letter "B" e.g, `0b` or `0B`:

```ts
let bin = 0b1000;
let anotherBin: number = 0b010;
```

Note that the digit after `0b` or `0B` must be `0` or `1`.

### Octal Numbers

An octal numbers uses a leading zero followed the letter `o` (since ES2015) `0o`. The digits after `0o` are numbers in the range `0` through `7`:

```ts
let octal: number = 0o10;
```

### Hexadeciaml numbers

Hexadecimal numbers use a leading zero followed by a lowercase or uppercase letter `X` (`0x` or `0X`). The digits after the `0x` must be in the range (`0123456789ABCDEF`). For example:

```ts
let hexadecimal: number = 0xa;
```

JavaScript has the `Number` type (with the letter `N` in uppercase) that refers to the non-primitive boxed object. You should not use this `Number` type as much as possible in TypeScript.

### Big Integers

The big integers represent the while numbers larger than 2^53 - 1. A Big integer literal has the `n` character at the end of an integer literal like this:

```ts
let big: bigint = 9007199245750991n;
```
