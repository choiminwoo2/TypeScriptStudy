"use strict";
exports.__esModule = true;
exports.generic = void 0;
var generic;
(function (generic) {
    function add(x, y) {
        var a = typeof x === 'string' && typeof y === 'string';
        var int = typeof x === 'number' && typeof y === 'number';
        if (a) {
            return x + y;
        }
        else if (int) {
            return x + y;
        }
        else {
            return undefined;
        }
    }
    generic.add = add;
})(generic = exports.generic || (exports.generic = {}));
var array = [1, 2, 3].map(function (item) { return item.toString(); });
console.log(array);
generic.add(1, 2);
var a = generic.add(1, '2');
generic.add('100', '200');
console.log(a);
