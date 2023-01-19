# TypeScript Class

## Introduction to the TypeScript Class

JavaScript does not have a concept of class like other programming langluages such as Java and C#. In ES5, you can use a constructor function:

```js
function Person(ssn, firstName, LastName) {
  this.ssn = ssn;
  this.firstName = firstName;
  this.lastName = lastName;
}
```

Next, you can define a prototype method to get the full name of the person by concatenating first name and last name like this:

```js
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
```

Tnen, you can use the Person "class" by creating a new objec:

```js
let person = new Person("171-28-0926", "Jhon", "Doe");
console.log(person.getFullName());
```

It would output the following to the console:

```ts
Jhon Doe
```

ES6 allowed you to define a class which is simply syntactic sugar for creating constructor function and prototypal inheritance:

```js
class Person {
  ssn;
  firstName;
  lastName;

  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

Using the `Person` class is the same as the `Peerson` constructor function:

```js
let person = new Person("171-28-0926", "Jhon", "Doe");
console.log(person.getFullName());
```

TypeScript class adds type anntations to the properties and methods of the class. The following shows the `Person` class in TypeScript:

```ts
class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  construnctor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```
