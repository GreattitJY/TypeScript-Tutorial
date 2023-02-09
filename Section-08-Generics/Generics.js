var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getRandomNumberElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 5, 3, 8, 4, 9];
var randomEle = getRandomElement(numbers);
console.log(randomEle);
var returnEle;
var strings = ["abc", "test"];
returnEle = getRandomElement(strings);
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
console.log(result);
