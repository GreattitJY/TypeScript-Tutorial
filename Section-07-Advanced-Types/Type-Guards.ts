type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error("Invalid arguments. Both arguments must be either numbers of string.");
}

class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

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

function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}

function signContract(partner: BusinessPartner): string {
  let message: string;
  if (isCustomer(partner)) {
    message = partner.isCreditAllowed() ? "Sign a new contract with the customer" : "Credit issue";
  } else {
    message = partner.isInShortList() ? "Sign a new contract with the supplier" : "Need to evaluate further";
  }

  return message;
}
