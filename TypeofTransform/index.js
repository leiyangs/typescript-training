"use strict";
var p = {
    name: "a",
    fly: function () { },
    talk: function () { }
};
var p1 = {
    name: "a",
    age: 18,
    gender: 1
};
//先定义变量，再定义类型
var p2 = {
    name: "b",
    age: 18,
    gender: 0
};
function getName(p) {
    return p.name;
}
console.log(getName(p2));
var FrontEndJob = {
    name: "前端工程师"
};
var interestsLevel = 2;
console.log(FrontEndJob, interestsLevel);
function getValueByKey(p, key) {
    return p[key];
}
var val = getValueByKey({ name: "c", age: 18, gender: "male" }, "age");
console.log(val);
var p3 = {};
var p4 = {};
var a = {};
var b = {
    // 三项都为必填
    b1: "1",
    b2: 12,
    b3: true
};
var p5 = {
    name: "d",
    age: 18,
    gender: "male"
};
var a1 = {
    name: "hehe"
};
var codition = { name: "鱼要水" };
console.log(codition);
var codition1 = { water: "水" };
var codition2 = { sky: "天空" };
var e = 10;
var e1 = "10";
var n = true;
// 7.3.4.ReturnType
/**
 * 获取函数类型的返回类型
 */
function getUserInfo() {
    return { name: "aa", age: 10 };
}
var userA = {
    name: "a",
    age: 10
};
// 7.3.5.InstanceType
/**
 * 获取构造函数类型的实例类型
 */
var NewPerson = /** @class */ (function () {
    function NewPerson(name) {
        this.name = name;
    }
    NewPerson.prototype.getName = function () {
        console.log(this.name);
    };
    return NewPerson;
}());
var i = {
    name: "1",
    getName: function () { }
};
var i1 = new NewPerson("aa");
module.exports = {};
