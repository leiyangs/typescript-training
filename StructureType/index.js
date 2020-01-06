"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 要判断目标类型`Person`是否能够兼容输入的源类型`Animal`
function getAnimalName(animal) {
    return animal.name;
}
var p = {
    name: "yang",
    age: 18,
    gender: 1
};
//只有在传参的时候两个变量之间才会进行兼容性的比较，赋值的时候并不会比较,会直接报错  传入的参数包含的属性只能多不能少(Person中属性要比Animal中多)
getAnimalName(p);
// let a: Animal = {
//   name: 'zhufeng',
//   age: 10,
//   gender: 0  // 报错
// }
// 2. 基本类型的兼容性检查
//基本数据类型也有兼容性判断
var num;
var str = "yang";
num = str;
//只要有toString()方法就可以赋给字符串变量 有toString方法说明符合num2要求
var num2;
var str2 = "yang";
num2 = str2;
// 3. 类的兼容性
/**
 * 在TS中是结构类型系统，只会对比结构而不在意类型
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bird;
}(Animal));
var a;
a = new Bird();
var b;
//并不是父类兼容子类，子类不兼容父类 只关心里边的属性是不是能覆盖
// b = new Animal(); // 报错Property 'swing' is missing in type 'Animal' but required in type 'Bird'
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    return Animal1;
}());
//如果父类和子类结构一样，也可以的
var Bird1 = /** @class */ (function (_super) {
    __extends(Bird1, _super);
    function Bird1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bird1;
}(Animal1));
var a1;
a1 = new Bird1();
var b1;
b1 = new Animal1();
//甚至没有关系的两个类的实例也是可以的
var Animal2 = /** @class */ (function () {
    function Animal2() {
    }
    return Animal2;
}());
var Bird2 = /** @class */ (function () {
    function Bird2() {
    }
    return Bird2;
}());
var a2;
a2 = new Bird2();
var b2;
b2 = new Animal2();
var sum;
function fun1(a, b) {
    return a + b;
}
sum = fun1;
//  4.2 比较返回值
function fun2(a) {
    return a;
}
sum = fun2;
var log;
function log1(a) {
    console.log(a);
}
log = log1;
var x;
var y;
x = y;
var x1;
var y1;
// x1 = y1; //报错 不能将类型“NoEmpty<number>”分配给类型“NoEmpty<string>”
// 6.枚举的兼容性
/**
 * 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容
 * 不同枚举类型之间是不兼容的
 */
//数字可以赋给枚举
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Yellow"] = 1] = "Yellow";
})(Colors || (Colors = {}));
;
var c;
c = Colors.Red;
c = 1;
//  c = "1"; // 不能将类型“"1"”分配给类型“Colors”
//枚举值可以赋给数字
var n;
n = 1;
n = Colors.Red;
module.exports = {};
