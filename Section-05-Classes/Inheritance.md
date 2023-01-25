# TypeScript Inheritance

## Introduction to the TypeScript inheritance

A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.

The class which inherits properties and methods is called the child class. And the class whose properties and methods are inherited is known as the parent class. These names come from the nature that children inherit genes from paraents.

Inheritance allows you to reuse the functionally of an exisiting class without rewriting it.

JavaScript uses prototypal inheritance, not classical inheritance like Java or C#. ES6 introduces the class syntax that is simply the syntactic sugar of the prototypal inheritance. TypeScript supports inheritance like ES6.

```ts
class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}
```

To inherit a class, you use the `extends` keyword. For example the following `Employee` class inherits the `Person` class.

```ts
class Employee extends Person {
  // ...
}
```

In this example, the `Employee` is a child class and the `Person` is the parent class.

## Constructor

Because the `Person` class has a constructor that initailizes the `firstName` and `lastName` properties, you need to initialize these properties in the constructor of the Employee class by calling its parent class' constructor.

To call the constructor of the parent class in the constructor of the child class, you use the `super()` syntax.

```ts
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
  }
}
```

```ts
let employee = new Employee("Jonh", "Doe", "Front-end Developer");
```

Because the `Employee` class inherits properties and methods of the `Person` class, you can call the `getFullName()` and `describe()` methods on the `employee` object as follows:

```ts
let employee = new Employee("Jonh", "Doe", "web Developer");

console.log(employee.getFullName());
console.log(employee.describe());
```

Output:

```ts
John Doe
THis is John Doe.
```

## Method overriding

When you call the `employee.describe()` method on the `employee` object, the `describe()` method of the `Person` class is executed that shows the message: `This is Join Doe`.

If you want the `Employee` class has its own version of the `describe()` method, you can define it in the `Employee` class like this:

```ts
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
  }
  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}.`;
  }
}
```

In the `describe()` method, we called the `describe()` method of the parent class using the syntax `super.methodInParentClass()`.

If you call the `describe()` method on the `employee` object, the `describe()` method in the `Employee` class is invoked:

```ts
let employee = new Employee("John", "Doe", "Web Developer");
console.log(employee.describe());
```

Output:

```ts
This is John Doe. I'm a Web Developer.
```
