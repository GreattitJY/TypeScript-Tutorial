// expresstion as targetType

function getNetPrice(price: number, discount: number, format: boolean): number | string {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}

// let netPrice = getNetPrice(100, 0.05, true) as string;
// console.log(netPrice);

// <targetType> value

let netPrice = <number>getNetPrice(100, 0.05, false);
