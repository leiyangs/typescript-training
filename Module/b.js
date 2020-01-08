"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zoo;
(function (zoo) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.eat = function () { console.log("zoo dog"); };
        return Dog;
    }());
    zoo.Dog = Dog;
})(zoo = exports.zoo || (exports.zoo = {}));
var home;
(function (home) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.eat = function () { console.log("home dog"); };
        return Dog;
    }());
    home.Dog = Dog;
})(home = exports.home || (exports.home = {}));
var dog_of_zoo = new zoo.Dog();
dog_of_zoo.eat();
var dog_of_home = new home.Dog();
dog_of_home.eat();
