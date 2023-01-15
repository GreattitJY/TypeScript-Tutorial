# TypeScript Object Type

## Introduction to TypeScript Object type

The TypeScript `object` type represesnts all values that are not in primitive types.

The following are primitive types in TypeScript:

- number
- bigint
- string
- boolean
- null
- undefined
- symbol

The following shows how to declare a variable that holds an object:

```ts
let employee: object;

employee = {
  firstName: "john",
  lastNmae: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(employee);
```

Output:

```ts
{
  firstName: "John"
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer"
}
```

If you ressign a a primitive value to the `employee` object, you'll get an error:

```ts
employee = "Jane";
```

Error:

```ts
error TS2322: Type '"jane"' is not assignable to type 'object'.
```

The `employee` object is an `object` type with a fixed list of prorperties. If you attempts to access a property that doesn't exist on the `employee` object, you'll get an error:

```ts
console.log(employee.hireDate);
```

Error:

```ts
error TS2339: Property 'hireDate' does not exist ob type 'object'.
```

> Note that the above statement works perfectly fine in JavaScript and returns `undefined` instead.

To explicitly specify properites of the `employee` object, you first use the following syntax to declare the `employee` object:

To explicitly spcify properties of the `employee` object, you first use the following syntax to delcare the `employee` object:

```ts
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};
```

And then you assign the `employee` object to a literal object with the described properties:

```ts
employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
```

Or you can combine both syntaxes in the same statement like this:

```ts
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
```

### object vs. Object

TypeScript has another type called `Object` with the letter `O` in uppercase. It`s important to understand the differences between them.

The `object` type represnts all non-primitive values while the `Object` type describes the functionality of all objects.

For example, the `Object` type has the `toString()` and ` valueOf()` methods that can be accessible by any object.

### The empty type {}

TypeScript has another type called empty type denoted by `{}`, which is quite simlier to the object type.

The empty type `{}` describes an object that has no property on its own. If you try to access a property on such object, TypeScript will issue a complier-time error:

```ts
let vacant: {};
vacant.firstName = "John";
```

Error:

```ts
error TS2339: Property 'firstName' does not exist on type '{}'.
```

But you can access all properties and methods declared on the `Object` type, which is avaliable on the object via prototype chain:

```ts
let vacant: {} = {};

console.log(vacant.toString());
```

Output:

```ts
[object Object]
```

## object / Object / { [key: string] : string }

```ts
let o: object;
o = { prop: 0 }; // OK
o = []; // OK
o = 42; // Error
o = "string"; // Error
o = false; // Error
o = null; // Error
o = undefined; // Error

let p: {}; // or Object
p = { prop: 0 }; // OK
p = []; // OK
p = 42; // OK
p = "string"; // OK
p = false; // OK
p = null; // Error
p = undefined; // Error

let q: { [key: string]: any };
q = { prop: 0 }; // OK
q = []; // OK
q = 42; // Error
q = "string"; // Error
q = false; // Error
q = null; // Error
q = undefined; // Error

let r: { [key: string]: string };
r = { prop: "string" }; // OK
r = { prop: 0 }; // Error
r = []; // Error
r = 42; // Error
r = "string"; // Error
r = false; // Error
r = null; // Error
r = undefined; // Error
```
