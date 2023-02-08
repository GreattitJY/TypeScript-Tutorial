function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Invalid arguments. Both arguments must be either numbers of string.");
}
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        // ...
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        // ...
        return true;
    };
    return Supplier;
}());
// function signContract(partner: BusinessPartner): string {
//   let message: string;
//   if (partner instanceof Customer) {
//     message = partner.isCreditAllowed() ? "sign a new contract with the customer" : "credut issue";
//   }
//   if (partner instanceof Supplier) {
//     message = partner.isInShortList() ? "sign a new contract the supplier" : "Need to evaluate further";
//   }
//   return message;
// }
function isCustomer(partner) {
    return partner instanceof Customer;
}
function signContract(partner) {
    var message;
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed() ? "Sign a new contract with the customer" : "Credit issue";
    }
    else {
        message = partner.isInShortList() ? "Sign a new contract with the supplier" : "Need to evaluate further";
    }
    return message;
}
