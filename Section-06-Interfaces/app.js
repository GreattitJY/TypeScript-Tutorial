// function getFullName(person: Person) {
//   return `${person.firstName} ${person.lastName}`;
// }
var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.later = function (email, after) {
        console.log("Send email to ".concat(email, " in ").concat(after, " ms."));
        return true;
    };
    Mail.prototype.send = function (email) {
        console.log("Sent email to ".concat(email));
        return true;
    };
    Mail.prototype.queue = function (email) {
        console.log("Queue an email to ".concat(email));
        return true;
    };
    return Mail;
}());
var mail = new Mail();
mail.later("one", 3);
mail.send("two");
mail.queue("two");
