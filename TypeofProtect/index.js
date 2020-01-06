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
var _a, _b, _c, _d;
/*
  9 类型保护
*/
/**
 * 类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型
 * 类型保护就是能够通过关键字判断出分支中的类型
 */
// 1.typeof 类型保护
function double(input) {
    if (typeof input === 'string') {
        return input + input;
    }
    else {
        if (typeof input === 'number') {
            return input * 2;
        }
        else {
            return input;
        }
    }
}
// 2.instanceof类型保护
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
function getName(animal) {
    if (animal instanceof Bird) {
        console.log(animal.swing);
    }
    else {
        console.log(animal.name);
    }
}
var animal = new Bird();
animal.swing = 2;
getName(animal);
// 3.null保护
/**
 * 如果开启了strictNullChecks选项，那么对于可能为null的变量不能调用它上面的方法和属性
 */
function getFirstLetter(s) {
    // 第一种方式加上null判断
    if (s === null) {
        return "";
    }
    // 第二种处理增加一个或
    s = s || "";
    return s.charAt(0);
}
console.log(getFirstLetter('aa'));
//它并不能处理一些复杂的判断，需要加非空断言操作符
function getFirstLetter2(s) {
    function log() {
        var _a;
        (_a = s) === null || _a === void 0 ? void 0 : _a.trim();
    }
    s = s || "";
    log();
    return s.charAt(0);
}
console.log(getFirstLetter2(null));
// 4.链判断运算符
/**
 * 链判断运算符是一种先检查属性是否存在，再尝试访问该属性的运算符，其符号为 ?.
 * 如果运算符左侧的操作数 ?. 计算为 undefined 或 null，则表达式求值为 undefined 。否则，正常触发目标属性访问，方法或函数调用。
 */
var a;
(_a = a) === null || _a === void 0 ? void 0 : _a.b; //如果a是null/undefined,那么返回undefined，否则返回a.b的值.
a == null ? undefined : a.b;
(_b = a) === null || _b === void 0 ? void 0 : _b['x']; //如果a是null/undefined,那么返回undefined，否则返回a[x]的值
a == null ? undefined : a['x'];
(_c = a) === null || _c === void 0 ? void 0 : _c.b(); // 如果a是null/undefined,那么返回undefined
a == null ? undefined : a.b(); //如果a.b不函数的话抛类型错误异常,否则计算a.b()的结果
(_d = a) === null || _d === void 0 ? void 0 : _d(); //如果a是null/undefined,那么返回undefined
a == null ? undefined : a(); //如果A不是函数会抛出类型错误
function getButton(button) {
    if (button.class == 'warning') {
        console.log(button.text1);
    }
    if (button.class == 'danger') {
        console.log(button.text2);
    }
}
function getNumber(x) {
    if ("swing" in x) {
        return x.swing;
    }
    return x.leg;
}
// 没有相同字段可以定义一个类型保护函数
function isBird(x) {
    return x.swing == 2;
    return x.swing == 2;
}
function getAnimal(x) {
    if (isBird(x)) {
        return x.swing;
    }
    return x.leg;
}
module.exports = {};
