# TypeScript Interface

## Introduction to TypeScript interfaces

TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.

```ts
function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(getFullName(person));
```

If the argument has two properties whose types are string, then the TypeScript compiler passes the check. Otherwise, it'll issue an error.

As you can see clearly from the code, the type annotation of the function argument makes the code difficult to read.

```ts
interface Person {
  firstName: string;
  lastName: string;
}
```

By convention, the interface names are in the camel case. They use a single capitalized letter to separate words in ther names. For examply, `Person`, `UserProfile`, and `FullName`.

```ts
function getFullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

let john = {
  fitstName: "John",
  lastName: "Doe",
};

console.log(getFullName(john));
```

## Optional properties

```ts
interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}

function getFullName(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}
```

## Readonly properties

If properties should be modifiable only when the object first created, you can use the `readonly` keyword before the name of the property:

```ts
interface Person {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let person: Person;
person = {
  ssn: "171-28-0926",
  firstName: "John",
  lastName: "Doe",
};
```

```ts
person.ssn = "123-12-1234";
```

Error:

```ts
error TS2540: Cannot assign to 'ssn' because it is a read-only property.
```

## Function types.

In addition to describing an object with properties, interfaces also allow you to describe function types.

To describe a function type, you assign the interface to the function signature that contains the paremeter list with types and returned types.

```ts
interface StringFormat {
  (str: string, isUpper: boolean): string;
}
```

Now, you can use this function type interface.

The following illustrates how to declare a variable of a function type and assign it a function value of the same type:

```ts
let format: StringFormat;

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format("hi", true));
```

Output:

```ts
HI;
```

Note that the parameter names don't need to match the function signature. The following exampley is equivalent to the above example:

```ts
let format: StringFormat;

format = function (src: string, upper: boolean) {
  return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format("hi", true));
```

The `StringForma`t interface ensures that all the callers of the function that implements it pass in the required arguments: a `string` and a `boolean`.

The following code also works perfectly fine even though the `lowerCase` is assigned to a function that doesn't have the second argument:

```ts
let lowerCase: StringFormat;
lowerCase = function (str: string) {
  return str.toLowerCase();
};

console.log(lowerCase("Hi", false));
```

## Class Types

If you have worked with Java or C# , you can find that the main use of the interface is to deifne a contract between unrelated classes.

For example, the following `Json` interface can be implemented by any unrelated classes:

```ts
interface Json {
  toJSON(): string;
}
```

The following declares a class that implements the `Json` interface:

```ts
class Person implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}
```

In the `Person` class, we implemented the `toJson()` method of the `Json` interface.

The following example shows how to use the `Person` class:

```ts
let person = new Person("John", "Doe");
console.log(person.toJson());
```

Output:

```ts
{"firstName":"John","lastName":"Doe"}
```
