# Understanding Type Annotations in TypeScript

TypeScript uses type annotations to explicitly specify types for identifiers such variables, functions, objects, etc.

TypeScript uses the syntax `: type` after an identifier as the type annotation, where `type` can be any valid type.

Once an identifier is annotated with a type, it can be usesd ad that tpye only. If the identifier is used as a differents tpye, the TypeScript compiler will issue an error.

## Type annotations in variables and constants

The following syntax shows how to specify type annotations for variables and constants:

```ts
let variableName: type;
let variableName: type = value;
const constanceName: type = value;
```

In this syntax, the type annotations comes after the variable or constant name and is preceded by a colon (:).

The following example uses `number` annotation for a variable:

```ts
let counter: number;
```

After this, you can only assign a number to the counter variable:

```ts
counter = 1;
```

If you assign a string to the `counter` variable, you'll get an error:

```ts
let counter: number;
counter = "hello"; // compile error
```

Error:

```ts
Type '"Hello"' is not assinable to type 'number'.
```

you can both use a type annotation for a variable and initialize it in a single statement like this:

```ts
let counter: number = 1;
```

```ts
let name: string = 'John';
let age: number = 25;
let active: boolean = true'
```

## Type anntation examples

### Arrays

To annotate an array type you use a specific type followed by a square bracket `: type[]`:

```ts
let arrayName: type[];
```

```ts
let names: string[] = ["John", "Jane", "Peter", "David", "Mary"];
```

### Objects

To specify a type for an object, you use the object type annotataion.

```ts
let person: {
  name: string;
  age: number;
};

persone = {
  nmae: "John",
  age: 25,
}; // valid
```

### Function arguments & return types

The following shows a function anntation with parameter type annotation and return type annotation:

```ts
let greeting: (nmae: string) => string;
```

```ts
greeting = function (name: string) {
  return `Hi ${name}`;
};
```

The follwing causes an error beacause the function that is assigned to the `greeting` varaible doesn't match with its function type.

```ts
greeting = function () {
  console.log("Hello");
};
```

Error:

```ts
Type '() => void' is not assignable to type '(name: string) => string'. Type 'void' is not assignable to type 'string'
```
