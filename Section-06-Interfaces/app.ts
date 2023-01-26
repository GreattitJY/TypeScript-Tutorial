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

// interface StringFormat {
//   (str: string, isUpper: boolean): string;
// }

// let lowerCase: StringFormat;
// lowerCase = function (str: string) {
//   return str.toLowerCase();
// };

// console.log(lowerCase("Hi", false));

/* ************************* */

interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}

class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`Sent email to ${email}`);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}`);
    return true;
  }
}

let mail = new Mail();

mail.later("one", 3);
mail.send("two");
mail.queue("two");
