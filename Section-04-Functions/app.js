function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log(sum(1, 2, 3));
var Counter = /** @class */ (function () {
    function Counter() {
        this.current = 0;
    }
    Counter.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return Counter;
}());
var counter = new Counter();
console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
console.log(counter.count()); // return a number
console.log(counter.count(1)); // return an empty array
console.log(counter.count()); // return a number
