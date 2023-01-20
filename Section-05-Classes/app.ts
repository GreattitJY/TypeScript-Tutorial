// class Person {
//   ssn: string;
//   firstName: string;
//   lastName: string;

//   constructor(ssn: string, firstName: string, lastName: string) {
//     this.ssn = ssn;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// let person = new Person("183-12-0232", "Jon", "Doe");

class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid");
    }
    this._age = theAge;
  }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error("Invalid first name.");
    }
    this._firstName = theFirstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error("Invalid last name.");
    }
    this._lastName = theLastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person();

// person.age = 0;

console.log(person.age);
