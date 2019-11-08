"use strict";
/**
 * 函数
 */
// 1.函数的定义
/**
 * 可以指定参数的类型和返回值的类型
 */
function hello(name) {
    console.log(name);
}
hello('world');
var getUsername = function (firstName, lastName) {
    return firstName + lastName;
};
// 3.没有返回值
function hello2(name) {
    console.log(name);
    return undefined;
}
hello2('lei');
// 4.可选参数
/**
 * 在TS中函数的形参和实参必须一样，不一样就要配置可选参数,而且必须是最后一个参数
 */
function print(name, age) {
    console.log("name" + name, "age" + age);
}
print('yy');
// 5.默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax('/user');
// 6.剩余参数
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (val, item) { return val += item; }, 0);
}
console.log(sum(1, 2, 3));
// 7.函数重载
/**
 * 在Java中的重载，指的是两个或者两个以上的同名函数，参数不一样
 * 在TypeScript中，表现为给同一个函数提供多个函数类型定义
 */
var obj = {};
function attr(val) {
    if (typeof val == 'string') {
        obj.name = val;
    }
    else {
        obj.age = val;
    }
}
attr('yang');
attr(18);
console.log(obj);
module.exports = {};
