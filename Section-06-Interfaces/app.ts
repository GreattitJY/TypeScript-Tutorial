// function getFullName(person: Person) {
//   return `${person.firstName} ${person.lastName}`;
// }

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// let person = {
//   firstName: "John",
//   lastName: "Doe",
// };

/* ************************* */

// interface Person {
//   firstName: string;
//   middleName?: string;
//   lastName: string;
// }

// function getFullName(person: Person) {
//   if (person.middleName) {
//     return `${person.firstName} ${person.middleName} ${person.lastName}`;
//   }
//   return `${person.firstName} ${person.lastName}`;
// }

// let jane = {
//   firstName: "Jane",
//   middleName: "K.",
//   lastName: "Doe",
//   age: 22,
// };

// console.log(getFullName(jane));

/* ************************* */

interface StringFormat {
  (str: string, isUpper: boolean): string;
}

let lowerCase: StringFormat;
lowerCase = function (str: string) {
  return str.toLowerCase();
};

console.log(lowerCase("Hi", false));
