# TypeScript Access Modifiers

Access Modifiers change the visibility of the properties and methods of a class. TypeScript provides three access modifiers:

- private
- protected
- public

Note `private` modifier limits the visibility to the same-class only. when you add the `private` modifier to property or method, you can access that property of method within the same class. Any attempt to access private properties or methods outside the class will result in an error at compile time.

The following example shows how to use the `private` modifier to the `snn`, `firstName`, and `lastName` properties of the `person` class:

```ts
class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;
  // ...
}
```

Once the `private` property is in place, you can access the `ssn` property in the constructor of methods of the `Person` class. For example:

```ts
class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

getFullName(): string {
  return `${this.firstName} ${this.lastName}`
}
```

The following attempts to access the `ssn` property outside the class:

```ts
let person = new Person("153-08-3123", "Jhon", "Doe");
console.log(person.ssn); // compile error
```

## The public modifier

The public modifier allows class properties and methods to be accessible from all locations. if you don't specify any access modifier for properties and methods, they will take the public modifier by default.

For example, the `getFUllName()` mehtod of the `Person` class has the `public` modifier. The following explicitly adds the public modifier to the `getFullName()` method:

```ts
class Person {
  // ...
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  // ...
}
```

It has the same effect as if the `public` keyword were omitted.

## The protected modifier

The `protected` modifier allows properties and methods of a class to be accessible within same class and within subclasses.

When a class (child class) inherits from another class (parent class), it is a subclass of the parent class.

The TypeScript compiler will issue an error if you attempt to access the protected properties ofr methods from anywhere else.

To add the protected modifier to a property or a method, you use the `protected` keyword. For example:

```ts
class person {
  protected ssn: string;
  // other code
}
```

The `ssn` property now is protected. It will be accessible within the `Person` class and in any class that inherits from the `Person` class. You'll learn more about inheritance here.

The `Pereson` class declares the two private properties and one protected property.
Its contstructor initializes these properties to three arguments.

To make the code shorter, TypeScript allows you to both declare properties and initialize them int the constructor liket this:

```ts
class Person {
  constructor(protected ssn: string, private firstName: string, private lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

When you consider the visibility of properties and methods, it is a good practice to start with the least visible access modifier, which is parvate.
