# TypeScript Array Type

## Introduction to TypeScript array type

A TypeScript `array` is an ordered list of data. To declare an array that holds values of a specific type, you use the following syntax:

```ts
let arrayName: type[];
```

For example, the following declares an array of strings:

```ts
let skills: string[];
```

And you can add one or more strings to the array:

```ts
skills[0] = "Problem Solving";
skills[1] = "Programming";
```

or use the `push()` method:

```ts
skills.push("Software Design");
```

The following declares a variable and assigns an array of strings to it:

```ts
let skills = ["Problem Solving", "Software Design", "Programming"];
```

In this example, TypeScript infers the `skills` array as an array of strings. It is equivalent to the following:

```ts
let skills: string[];
skills = ["Problem Solving", "Software Desig", "Programming"];
```

Once you define an array of a specific type, TypeScript will prevet you from adding incompatible values th the array.

The following will cause an error:

```ts
skills.push(100);
```

...because we're trying to add a number to the string array.

Error:

```ts
Argument of type 'number' is not assignable to parameter of type 'string'.
```

When you extract an element from the array, TypeScript can do type inference. For exapmle:

```ts
let skill = skills[0];
console.log(typeof skill);
```

Output:

```ts
string;
```

In this example, we extract the first element of the `skills` array and assign it to the `skill` variabe.

Since an element in a string array is a string, TypeScript infers the type of the `skill` variable to string as shown in the output.

## TypeScript array properties and methods

TypeScript arrays can access the properties methods of a JavaScript. For example, the following uses the length property to get the number of element in an array:

```ts
let series = [1, 2, 3];
console.log(series.length); // 3
```

And you can use all the useful array method such as `forEach()`, `map()`, `reduce()` and `filter()`. For example:

```ts
let series = [1, 2, 3];
let doubleIt = series.map((e) => e * 2);
console.log(doubleIt);
```

Output:

```ts
[2, 4, 6];
```

## Storing Values of mixed types

The following illustrates how to declare an array that hold both strings and numbers:

```ts
let scores = ["Programming", 5, "Software Design", 4];
```

In this case, TypeScript infers the `scores` array as an array of `string | number`.

It`s equivalent to the following:

```ts
let scores: (string | number)[];
scores = ["Programming", 5, "Software Design", 4];
```
