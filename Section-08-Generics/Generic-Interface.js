// interface interfaceName<T> {}
// interface interfaceName<U, V> {}
var month = {
    key: "Jan",
    value: 1
};
console.log(month);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
    };
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    return List;
}());
var list = new List();
for (var i = 0; i < 10; i++) {
    list.add(i);
}
var inputOptions = {
    disabled: false,
    visible: true
};
console.log(inputOptions);
