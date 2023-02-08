// expresstion as targetType
function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "$".concat(netPrice) : netPrice;
}
// let netPrice = getNetPrice(100, 0.05, true) as string;
// console.log(netPrice);
// <targetType> value
var netPrice = getNetPrice(100, 0.05, false);
