"use strict";
var speaker = {
    speak: function () { }
};
var r = {
    width: 10,
    height: 10
};
// 一个类要实现一个接口，必须实现接口中所有方法
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.eat = function () { };
    Bird.prototype.move = function () { };
    return Bird;
}());
var p1 = {
    id: 1,
    name: 'zhufeng',
    age: 10,
    gender: 0
};
var discount = function (price) {
    return price * .8;
};
var arr = ["1", "2", "3"];
console.log(arr);
// 11.6 类接口 对类的约束
// 11.7 构造函数的类型
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    return Animal3;
}());
function createAnimal(clazz, name) {
    return new clazz(name);
}
var a1 = createAnimal(Animal3, 'zhufeng');
console.log(a1.name);
module.exports = {};
