# TypeScript Static Methods and Properties.

# Static properties

Unlike an instance property, a static property is shared among all instances of a class.

To declare a static property, you use the `static` keyword. To access a static property, you use the `className.propertyName` syntax. For example:

```ts
class Employee {
  static headcount: number = 0;

  constructor(private firstName: string, private lastName: string, private jobTitle: string) {
    Employee.headcount++;
  }
}
```

In this example, the `headcount` is a static property that initialized to zero. Its value is increased by 1 whenever a new object is created.

The following creates two `Employee` objects and shows the value of the `headcount` property. It returns two as expected.

```ts
let john = new Employee("John", "Doe", "Front-end Developer");
let jane = new Employee("Jane", "Doe", "Back-end Developer");

console.log(Employee.headcount); // 2
```

## Static methods

Similar to the static property, a static method is also shared across instances of the class. To declare a static method, you use the `static` keyword before the method name. For example:

```ts
class Employee {
  private static headcount: number = 0;

  constructor(private firstName: string, private lastName: string, private jobTitle: string) {
    Employee.headcount++;
  }

  public static getHeadcount() {
    return Employee.headcount;
  }
}
```

In this example:

- First, change the access modifier of the `headcount` static property from `Public` to `Private` so that its value cannot be changed outside of the class without creating a new `Employee` object.

- Second, add the `getHeadcount()` static method taht returns the value of the `headcount` static property.

To call a static method, you use the `className.staticMethod()` syntax.

```ts
let john = new Employee("John", "Doe", "Front-end Developer");
let jane = new Employee("Jane", "Doe", "Back-end Developer");

console.log(Employee.getHeadcount); // 2
```

In parctice, you will find the library that contatins many static properties and methods like the `Math` object. It has `PI`, `E`, ...static properties and `abs()`, `round()`, etc., static methods.
