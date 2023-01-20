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
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error("The age is invalid");
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirstName) {
            if (!theFirstName) {
                throw new Error("Invalid first name.");
            }
            this._firstName = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theLastName) {
            if (!theLastName) {
                throw new Error("Invalid last name.");
            }
            this._lastName = theLastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person();
// person.age = 0;
console.log(person.age);
